import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { SplashPage } from "./views/pages/landing/splash_page";
import { routes } from "./core/constants";
import { DashboardPage } from "./views/pages/dashboard/dashboard_page";
import MainLayout from "./views/layout/main_layout";
import { Provider } from "react-redux";
import { store } from "./data/store/index";
import { LoginPage } from "./views/pages/login/login";
import { ResearchPage } from "./views/pages/research/research_page";
import { ResearchPageNew } from "./views/pages/research/research_new";
import { ResearchPageProfile } from "./views/pages/research/research_profile";
import ResearchPageEdit from "./views/pages/research/research_editt";
import ProtectedRoute from "./router/protected_route";
import { UserRoles } from "./core/utils";
import "react-toastify/dist/ReactToastify.css";
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
          <Route component={SplashPage} path={routes.splash} exact />
          <Route component={DashboardPage} path={routes.dashboard} exact />
          <Route component={LoginPage} path={routes.login} exact />
          <Route component={ResearchPage} path={routes.research} exact />
          <Route component={ResearchPageNew} path={routes.new_research} exact />
          <Route
            component={ResearchPageProfile}
            path={routes.profile_research}
            exact
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.level1 ? true : false}
            authenticationPath={routes.research}
            exact={true}
            path={routes.edit_research}
            component={ResearchPageEdit}
          />
          <Route component={LaboratoryPage} path={routes.laboratory} exact />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.level1 || RoleUser === UserRoles.level2
                ? true
                : false
            }
            authenticationPath={routes.laboratory}
            exact={true}
            path={routes.new_laboratory}
            component={LaboratoryPageNew}
          />
          <Route
            component={LaboratoryPageProfile}
            path={routes.profile_laboratory}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.level1 || RoleUser === UserRoles.level2
                ? true
                : false
            }
            authenticationPath={routes.laboratory}
            exact={true}
            path={routes.edit_laboratory}
            component={LaboratoryPageEdit}
          />
          <Route component={TasksPage} path={routes.task} exact />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.level1 || RoleUser === UserRoles.level2
                ? true
                : false
            }
            authenticationPath={routes.task}
            exact={true}
            path={routes.task_new}
            component={TaskPageNew}
          />
          <Route component={TaskPageProfile} path={routes.task_profile} exact />

        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
