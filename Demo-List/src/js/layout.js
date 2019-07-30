import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

import TimeLine from "./views/TimeLIne";

// import ScrollToTop from "./component/scrollToTop";

export class Layout extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path="/index.html" component={TimeLine} />
							<Route exact path="/" component={TimeLine} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
