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
import { ResearchPage } from "./views/pages/research/research_page";
import { ResearchPageNew } from "./views/pages/research/research-new";
import { ResearchPageProfile } from "./views/pages/research/research-profile";
import { ResearchPageEdit } from "./views/pages/research/research-editt";


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
          <Route component={ResearchPageProfile} path={routes.profile_research} exact />
          <Route component={ResearchPageEdit} path={routes.edit_research} exact />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
