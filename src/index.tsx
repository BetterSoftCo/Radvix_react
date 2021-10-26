import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { SplashPage } from "./views/pages/landing/splash_page";
import { routes } from "./core/constants";
import { DashboardPage } from "./views/pages/dashboard/dashboard_page";
import MainLayout  from "./views/layout/MainLayout";
import { Provider } from "react-redux";
import { store } from "./data/Store/index";
import { LoginPage } from "./views/pages/login/login";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route component={SplashPage} path={routes.splash} exact />
          <Route component={DashboardPage} path={routes.dashboard} exact />
          <Route component={LoginPage} path={routes.login} exact />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
