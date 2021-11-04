import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { SplashPage } from "./views/pages/landing/splash_page";
import { AppRoutes } from "./core/constants";
import { DashboardPage } from "./views/pages/dashboard/dashboard_page";
import MainLayout from "./views/layout/main_layout";
import { Provider } from "react-redux";
import { store } from "./data/store/index";
import { LoginPage } from "./views/pages/login/login";

import ProtectedRoute from "./router/protected_route";
import { UserRoles } from "./core/utils";
import 'react-toastify/dist/ReactToastify.css';

import {
  ResearchPage,
  ResearchPageNew,
  ResearchPageProfile,
  ResearchPageEdit,
} from "./views";
import { LaboratoryPage } from "./views/pages/laboratory/laboratory_page";
import { LaboratoryPageNew } from "./views/pages/laboratory/laboratory_new";
import { LaboratoryPageProfile } from "./views/pages/laboratory/laboratory_profile";
import { LaboratoryPageEdit } from "./views/pages/laboratory/laboratory_edit";
import { TasksPage } from "./views/pages/task/task_page";
import { TaskPageNew } from "./views/pages/task/task_new";
import { TaskPageProfile } from "./views/pages/task/task_profile";

const RoleUser: UserRoles = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route component={SplashPage} path={AppRoutes.splash} exact />
          <Route component={DashboardPage} path={AppRoutes.dashboard} exact />
          <Route component={LoginPage} path={AppRoutes.login} exact />
          <Route component={ResearchPage} path={AppRoutes.research} exact />
          <Route component={ResearchPageNew} path={AppRoutes.new_research} exact />
          <Route
            component={ResearchPageProfile}
            path={AppRoutes.profile_research}
            exact
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.level1 ? true : false}
            authenticationPath={AppRoutes.research}
            exact={true}
            path={AppRoutes.edit_research}
            component={ResearchPageEdit}
          />
          <Route component={LaboratoryPage} path={AppRoutes.laboratory} exact />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.level1 || RoleUser === UserRoles.level2
                ? true
                : false
            }
            authenticationPath={AppRoutes.laboratory}
            exact={true}
            path={AppRoutes.new_laboratory}
            component={LaboratoryPageNew}
          />
          <Route
            component={LaboratoryPageProfile}
            path={AppRoutes.profile_laboratory}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.level1 || RoleUser === UserRoles.level2
                ? true
                : false
            }
            authenticationPath={AppRoutes.laboratory}
            exact={true}
            path={AppRoutes.edit_laboratory}
            component={LaboratoryPageEdit}
          />
          <Route component={TasksPage} path={AppRoutes.task} exact />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.level1 || RoleUser === UserRoles.level2
                ? true
                : false
            }
            authenticationPath={AppRoutes.task}
            exact={true}
            path={AppRoutes.task_new}
            component={TaskPageNew}
          />
          <Route component={TaskPageProfile} path={AppRoutes.task_profile} exact />

        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
