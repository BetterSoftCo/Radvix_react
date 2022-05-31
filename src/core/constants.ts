import { LocalDataSources } from "../data/local_datasources";

export class AppConstants {
  static token: string = "";
  static base_url_api: string = "http://185.79.156.134:1034/api/";
  static base_url_image: string = "http://185.79.156.134:1024";
}
const local = new LocalDataSources();
const companyName = local.getUserInfo().institution
export class AppRoutes {
  static splash: string = "/";
  static dashboard: string = `/dashboard/${companyName}`;
  static login: string = "/login";
  static research: string = `/dashboard/${companyName}/research/`;
  static new_research: string = `/dashboard/${companyName}/research/new/`;
  static timeline_research: string = `/dashboard/${companyName}/research/timeline/`;
  static profile_research: string = `/dashboard/${companyName}/research/profile/:id`;
  static edit_research: string = `/dashboard/${companyName}/research/edit/:id`;
  static team: string = `/dashboard/${companyName}/team/`;
  static team_profile: string = `/dashboard/${companyName}/team/profile/:id`;
  static team_edit: string = `/dashboard/${companyName}/team/edit/:id`;
  static new_team: string = `/dashboard/${companyName}/team/new/`;
  static laboratory: string = `/dashboard/${companyName}/laboratory/`;
  static new_laboratory: string = `/dashboard/${companyName}/laboratory/new/`;
  static profile_laboratory: string = `/dashboard/${companyName}/laboratory/profile/:id`;
  static edit_laboratory: string = `/dashboard/${companyName}/laboratory/edit/:id`;
  static task: string = `/dashboard/${companyName}/Task/`;
  static task_new: string = `/dashboard/${companyName}/Task/new/`;
  static task_profile: string = `/dashboard/${companyName}/Task/profile/:id`;
  static task_edit: string = `/dashboard/${companyName}/Task/edit/:id`;
  static member: string = `/dashboard/${companyName}/Member`;
  static member_new: string = `/dashboard/${companyName}/Member/new/`;
  static member_profile: string = `/dashboard/${companyName}/Member/profile/:id`;
  static member_user_edit: string = `/dashboard/${companyName}/Member/UserEdit/:id`;
  static member_edit_profile: string = `/dashboard/${companyName}/Member/EditProfile/:id`;
  static equip_new: string = `/dashboard/${companyName}/Equip/new/`;
  static equip: string = `/dashboard/${companyName}/Equip/`;
  static equip_profile: string = `/dashboard/${companyName}/Equip/profile/:id`;
  static equip_edit: string = `/dashboard/${companyName}/Equip/edit/:id`;
  static discussion: string = `/dashboard/${companyName}/Discussion/panel/:id`;
  static discussion_new: string = `/dashboard/${companyName}/Discussion/new/:topic/:section`;
	static setting:string =`/dashboard/${companyName}/Setting/`;
	static ticketing:string =`/dashboard/${companyName}/Ticketing/`;
	static ticketing_new:string =`/dashboard/${companyName}/Ticketing/new`;
	static library_page:string =`/library/${companyName}/page`;
	static register_page:string =`/register`;
	static invite_register:string =`/invite_register`;
  static discussion_list: string = `/dashboard/${companyName}/Discussion/list/`;
  static data: string = `/dashboard/${companyName}/Data/`;
  static data_new: string = `/dashboard/${companyName}/Data/new`;
  static data_mydata: string = `/dashboard/${companyName}/Data/mydata/`;
  static data_profile: string = `/dashboard/${companyName}/Data/profile/:dataid/:appTaskId`;
  static data_edit: string = `/dashboard/${companyName}/Data/edit/:dataid/:appTaskId`;
  static publish: string = `/dashboard/${companyName}/Publish/`;
  static publish_new: string = `/dashboard/${companyName}/Publish/new`;
  static publish_upload: string = `/dashboard/${companyName}/Publish/upload/:id`;
  static expense: string = `/dashboard/${companyName}/Expense/`;
  static expense_new: string = `/dashboard/${companyName}/Expense/new`;
  static expense_profile: string = `/dashboard/${companyName}/Expense/profile/:id`;
  static ticketing_ticket: string = `/dashboard/${companyName}/Ticketing/ticket/:id`;
  static admin_dashboard: string = "/dashboard/Admin";
  static admin_clients: string = "/dashboard/Admin/clients/";
  static admin_member: string = "/dashboard/Admin/member/:id";
  static admin_payments: string = "/dashboard/Admin/payments/";
  static admin_tickets: string = "/dashboard/Admin/tickets/";
  static admin_ticket: string = "/dashboard/Admin/ticket/:id";
  static admin_broadcast: string = "/dashboard/Admin/broadcast/";
  static publish_profile:string ='/dashboard/Publish/profile/:id';
	static publish_edit: string = "/dashboard/Publish/edit/:id";
  static expense_edit: string = "/dashboard/Expense/edit/:id";
}
  
