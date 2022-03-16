import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import SplashPage from "./views/pages/landing/splash_page";
import { AppRoutes } from "./core/constants";
import { DashboardPage } from "./views/pages/dashboard/dashboard_page";
import MainLayout from "./views/layout/main_layout";
import { Provider } from "react-redux";
import { store } from "./data/store";
import ProtectedRoute from "./router/protected_route";
import { UserRoles } from "./core/utils";
import "react-toastify/dist/ReactToastify.css";

import {
  ResearchPage,
  ResearchPageNew,
  ResearchPageProfile,
  ResearchPageEdit,
  LoginPage,
  LaboratoryPageProfile,
  LaboratoryPage,
  LaboratoryPageEdit,
  LaboratoryPageNew,
  TasksPage,
  TaskPageNew,
  TaskPageProfile,
  TaskPageEdit,
  MemberPage,
  MemberPageNew,
  MemberPageProfile,
  MemberPageUseEdit,
  EditMyProfile,
  NewEquip,
  EquipPage,
  EquipProfile,
  EditEquip,
  NewDiscusstion,
  DiscusstionPage,
  DiscusstionList,
  TeamPage,
  TeamPageNew,
  DataPageNew,
  DataCollection,
  MyDataCollection,
  DataPageProfile,
  DataPageEdit,
  PublishPageNew,
  MyPublications,
  PublicationProfile,
  UploadNewDraft,
  ExpensePageNew,
  ExpenseArchive,
  ExpensePageProfile,
  SettingPage,
  TicketPageNew,
  TicketPage,
  Ticket,
  AdminDashboard,
  AdminClients,
  AdminMember,
  AdminPayments,
  AdminTickets,
  AdminTicket,
  AdminBroadcast,
  TeamPageProfile,
  TeamPageEdit,
  TimeLine,
  ShowLibraryPage,
  RegisterPage,
  not_found_page,
} from "./views";
import edit_publish from "./views/pages/publish/edit_publish";
import edit_expense from "./views/pages/expense/edit_expense";

const RoleUser: UserRoles = store.getState().userRole;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route component={SplashPage} path={AppRoutes.splash} exact />
          <Route component={DashboardPage} path={AppRoutes.dashboard} exact />
          <Route component={LoginPage} path={AppRoutes.login} exact />
          <Route
            component={RegisterPage}
            path={AppRoutes.register_page}
            exact
          />
          <Route component={ResearchPage} path={AppRoutes.research} exact />
          <Route
            component={ResearchPageNew}
            path={AppRoutes.new_research}
            exact
          />
          <Route
            component={ResearchPageProfile}
            path={AppRoutes.profile_research}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
                ? true
                : false
            }
            authenticationPath={AppRoutes.research}
            exact={true}
            path={`${AppRoutes.edit_research}`}
            component={ResearchPageEdit}
          />

          <Route component={LaboratoryPage} path={AppRoutes.laboratory} exact />
          <Route component={TeamPage} path={AppRoutes.team} exact />
          <Route component={TeamPageNew} path={AppRoutes.new_team} exact />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
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
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
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
              RoleUser === UserRoles.L1User ||
              RoleUser === UserRoles.L1Client ||
              RoleUser === UserRoles.L2User
                ? true
                : false
            }
            authenticationPath={AppRoutes.task}
            exact={true}
            path={AppRoutes.task_new}
            component={TaskPageNew}
          />
          <Route
            component={TaskPageProfile}
            path={AppRoutes.task_profile}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
                ? true
                : false
            }
            authenticationPath={AppRoutes.task}
            exact={true}
            path={AppRoutes.task_edit}
            component={TaskPageEdit}
          />
          <Route component={MemberPage} path={AppRoutes.member} exact />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User ||
              RoleUser === UserRoles.L1Client ||
              RoleUser === UserRoles.L2User
                ? true
                : false
            }
            authenticationPath={AppRoutes.member}
            exact={true}
            path={AppRoutes.member_new}
            component={MemberPageNew}
          />
          <Route
            component={MemberPageProfile}
            path={AppRoutes.member_profile}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
                ? true
                : false
            }
            authenticationPath={AppRoutes.member}
            exact={true}
            path={AppRoutes.member_user_edit}
            component={MemberPageUseEdit}
          />
          <Route
            component={EditMyProfile}
            path={AppRoutes.member_edit_profile}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
                ? true
                : false
            }
            authenticationPath={AppRoutes.equip}
            exact={true}
            path={AppRoutes.equip_new}
            component={NewEquip}
          />
          <Route component={EquipPage} path={AppRoutes.equip} exact />
          <Route
            component={EquipProfile}
            path={AppRoutes.equip_profile}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
                ? true
                : false
            }
            authenticationPath={AppRoutes.equip}
            exact={true}
            path={AppRoutes.equip_edit}
            component={EditEquip}
          />
          <Route
            component={NewDiscusstion}
            path={AppRoutes.discussion_new}
            exact
          />
          <Route
            component={DiscusstionPage}
            path={AppRoutes.discussion}
            exact
          />
          <Route
            component={DiscusstionList}
            path={AppRoutes.discussion_list}
            exact
          />
          <Route component={DataPageNew} path={AppRoutes.data_new} exact />
          <Route component={DataCollection} path={AppRoutes.data} exact />
          <Route
            component={MyDataCollection}
            path={AppRoutes.data_mydata}
            exact
          />
          <Route
            component={DataPageProfile}
            path={AppRoutes.data_profile}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User || RoleUser === UserRoles.L1Client
                ? true
                : false
            }
            authenticationPath={AppRoutes.data}
            exact={true}
            path={AppRoutes.data_edit}
            component={DataPageEdit}
          />
          <Route
            component={PublishPageNew}
            path={AppRoutes.publish_new}
            exact
          />
          <Route component={MyPublications} path={AppRoutes.publish} exact />
          <Route
            component={PublicationProfile}
            path={AppRoutes.publish_profile}
            exact
          />
          <Route
            component={UploadNewDraft}
            path={AppRoutes.publish_upload}
            exact
          />
          <Route
            component={edit_publish}
            path={AppRoutes.publish_edit}
            exact
          />
          <Route
            component={ExpensePageNew}
            path={AppRoutes.expense_new}
            exact
          />
          <Route
            component={edit_expense}
            path={AppRoutes.expense_edit}
            exact
          />
          <Route component={ExpenseArchive} path={AppRoutes.expense} exact />
          <Route
            component={ExpensePageProfile}
            path={AppRoutes.expense_profile}
            exact
          />
          <Route component={SettingPage} path={AppRoutes.setting} exact />
          <Route
            component={TicketPageNew}
            path={AppRoutes.ticketing_new}
            exact
          />
          <Route component={TicketPage} path={AppRoutes.ticketing} exact />
          <Route component={Ticket} path={AppRoutes.ticketing_ticket} exact />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.Admin ? true : false}
            authenticationPath={AppRoutes.dashboard}
            exact={true}
            path={AppRoutes.admin_dashboard}
            component={AdminDashboard}
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.Admin ? true : false}
            authenticationPath={AppRoutes.dashboard}
            exact={true}
            path={AppRoutes.admin_clients}
            component={AdminClients}
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.Admin ? true : false}
            authenticationPath={AppRoutes.dashboard}
            exact={true}
            path={AppRoutes.admin_member}
            component={AdminMember}
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.Admin ? true : false}
            authenticationPath={AppRoutes.dashboard}
            exact={true}
            path={AppRoutes.admin_payments}
            component={AdminPayments}
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.Admin ? true : false}
            authenticationPath={AppRoutes.dashboard}
            exact={true}
            path={AppRoutes.admin_tickets}
            component={AdminTickets}
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.Admin ? true : false}
            authenticationPath={AppRoutes.dashboard}
            exact={true}
            path={AppRoutes.admin_ticket}
            component={AdminTicket}
          />
          <ProtectedRoute
            isAuthenticated={RoleUser === UserRoles.Admin ? true : false}
            authenticationPath={AppRoutes.dashboard}
            exact={true}
            path={AppRoutes.admin_broadcast}
            component={AdminBroadcast}
          />
          <Route
            component={TeamPageProfile}
            path={AppRoutes.team_profile}
            exact
          />
          <ProtectedRoute
            isAuthenticated={
              RoleUser === UserRoles.L1User ||
              RoleUser === UserRoles.L1Client ||
              RoleUser === UserRoles.L2User
                ? true
                : false
            }
            authenticationPath={AppRoutes.team}
            exact={true}
            path={AppRoutes.team_edit}
            component={TeamPageEdit}
          />
          <Route
            component={TimeLine}
            path={AppRoutes.timeline_research}
            exact
          />
          <Route
            component={ShowLibraryPage}
            path={AppRoutes.library_page}
            exact
          />
          <Route path="*" exact={true} component={not_found_page} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
