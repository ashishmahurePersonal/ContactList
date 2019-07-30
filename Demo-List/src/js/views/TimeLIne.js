import React from "react";

import TimeLineYears from "../component/TimeLineYears";
import TimeLineYearsDetails from "../component/TimeLineYearsDetails";

export default class TimeLIne extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1>TimeLine</h1>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							<TimeLineYears />
						</ul>
						<div className={"detailsYears"}>
							<TimeLineYearsDetails />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
