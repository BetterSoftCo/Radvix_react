import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { SplashPage } from "./views/pages/landing/splash_page";
import { routes } from "./core/constants";
import { DashboardPage } from "./views/pages/dashboard/dashboard_page";
import MainLayout from "./views/layout/MainLayout";
import { Provider } from "react-redux";
import { store } from "./data/Store/index";
import { LoginPage } from "./views/pages/login/login";

import ProtectedRoute from "./router/ProtectedRoute";
import { UserRoles } from "./core/utils";
import 'react-toastify/dist/ReactToastify.css';

import {
  ResearchPage,
  ResearchPageNew,
  ResearchPageProfile,
  ResearchPageEdit,
  TeamPage,
} from "./views";

const RoleUser: UserRoles = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route component={SplashPage} path={routes.splash} exact />
          <Route component={DashboardPage} path={routes.dashboard} exact />
          <Route component={LoginPage} path={routes.login} exact />
          <Route component={ResearchPage} path={routes.research} exact />
          <Route component={ResearchPageNew} path={routes.new_research} exact />
          <Route component={TeamPage} path={routes.team} exact />
          <Route
            component={ResearchPageProfile}
            path={routes.profile_research}
            exact
          />
          {/* <Route
            component={ResearchPageEdit}
            path={routes.edit_research}
            exact
          /> */}
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.level1 || RoleUser === UserRoles.level2
                ? true
                : false
            }
            authenticationPath={routes.research}
            exact={true}
            path={routes.edit_research}
            component={ResearchPageEdit}
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
