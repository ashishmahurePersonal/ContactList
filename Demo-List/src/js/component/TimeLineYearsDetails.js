import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

class TimeLineYearsDetails extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						let details = store.slectedYear != null ? store.slectedYear : [];
						return details.map((item, index) => {
							let Dots = Math.floor(Math.random() * 15) + 1,
								itemsDotes = [];
							for (var i = 0; i < Dots; i++) {
								itemsDotes.push(
									<div key={i} className={"dotsDisplay"}>
										.
									</div>
								);
							}
							return (
								<div key={index} className={"yearBlockInfo"}>
									{itemsDotes}
									<div>
										{store.slectedYear !== null && (
											<div>
												<div className={"eachCell"}>
													<strong className={"fontLess"}>{item.Year}</strong>
													<br />
													<strong>{item.Month}</strong>
												</div>
												<div className={"moreDetials"}>
													<strong>{item.Quote}</strong>
													<br />
													{item.info}
												</div>
											</div>
										)}
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}

TimeLineYearsDetails.propTypes = {
	yearList: PropTypes.any
};

export default TimeLineYearsDetails;
