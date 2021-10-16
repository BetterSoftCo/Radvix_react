import "./styles/app.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {SplashPage} from "./views/pages/landing/splash_page";
import {routes} from "./core/constants";
import {DashboardPage} from "./views/pages/dashboard/dashboard_page";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route component={SplashPage} path={routes.splash} exact/>
			<Route component={DashboardPage} path={routes.dashboard} exact/>
		</Switch>
	</BrowserRouter>,

	document.getElementById('root')
);