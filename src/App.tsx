import React from "react";
import {SplashPage} from "./views/pages/landing/splash_page";
import {routes} from "./core/constants";
import {Route, Switch, withRouter} from "react-router";
import {DashboardPage} from "./views/pages/dashboard/dashboard_page";

const App = withRouter(() => {
	return (
		<>
			<Switch>
				<Route component={SplashPage} path={routes.splash} exact/>
				<Route component={DashboardPage} path={routes.dashboard} exact/>
			</Switch>
		</>
	);
});

export default (App);
