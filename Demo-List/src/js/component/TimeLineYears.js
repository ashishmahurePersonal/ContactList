import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

class TimeLineYears extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return store.yearList.map((item, index) => {
							let className = "yearBlock El_" + Object.keys(item)[0];
							return (
								<div
									className={className}
									key={index}
									onClick={() => actions.yearSelected(Object.keys(item)[0])}>
									<strong>{Object.keys(item)[0]}</strong>
									<br />
									<span className={"noClour"}> {item[Object.keys(item)[0]]}</span>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}

TimeLineYears.propTypes = {
	yearList: PropTypes.any
};

export default TimeLineYears;
