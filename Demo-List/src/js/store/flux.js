import PropTypes from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			yearList: [
				{
					2003: "Start"
				},
				{
					2004: "+1"
				},

				{
					2005: "+3"
				},

				{
					2019: "Todays"
				},
				{
					2020: "Renewal"
				},
				{
					2023: "Last Renewal"
				}
			],
			yearDetailsList: {
				2003: [
					{
						Year: 2003,
						Month: "July 30",
						Quote: "Quote#33: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2009,
						Month: "Feb 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2004,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					}
				],

				2004: [
					{
						Year: 2004,
						Month: "Jun 30",
						Quote: "Quote#40: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2004,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					}
				],

				2005: [
					{
						Year: 2005,
						Month: "Feb 30",
						Quote: "Quote#45: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2004,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2004,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					}
				],

				2019: [
					{
						Year: 2019,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2009,
						Month: "Feb 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2004,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2009,
						Month: "Feb 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2004,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					}
				],

				2020: [
					{
						Year: 2020,
						Month: "May 30",
						Quote: "Quote#37: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2009,
						Month: "Feb 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2004,
						Month: "Jan 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					},
					{
						Year: 2009,
						Month: "Feb 30",
						Quote: "Quote#43: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					}
				],

				2023: [
					{
						Year: 2023,
						Month: "Dec 30",
						Quote: "Quote#21: Colocation",
						info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
					}
				]
			},
			slectedYear: [
				{
					Year: 2019,
					Month: "Jan 30",
					Quote: "Quote#43: Colocation",
					info: "+30 product sell ,\n +1 price Increase,\n - agrement Terms"
				}
			]
		},
		actions: {
			yearSelected: id => {
				const store = getStore();
				let oldContactList = store.contactList;
				oldContactList.splice(id, 1);
				setStore({ contactList: oldContactList, slectedYear: store.yearDetailsList[id] });
				setStore({ store });
			}
		}
	};
};

getState.propTypes = {
	history: PropTypes.object
};

export default getState;
