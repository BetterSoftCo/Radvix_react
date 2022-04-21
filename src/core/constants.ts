export class AppConstants {
  static token: string = "";
  static base_url_api: string = "http://185.79.156.134:1024/api";
  static base_url_image: string = "http://185.79.156.134:1024";
}

export class AppRoutes {
  static splash: string = "/";
  static dashboard: string = "/dashboard";
  static login: string = "/login";
  static research: string = "/dashboard/research/";
  static new_research: string = "/dashboard/research/new/";
  static timeline_research: string = "/dashboard/research/timeline/";
  static profile_research: string = "/dashboard/research/profile/:id";
  static edit_research: string = "/dashboard/research/edit/:id";
  static team: string = "/dashboard/team/";
  static team_profile: string = "/dashboard/team/profile/:id";
  static team_edit: string = "/dashboard/team/edit/:id";
  static new_team: string = "/dashboard/team/new/";
  static laboratory: string = "/dashboard/laboratory/";
  static new_laboratory: string = "/dashboard/laboratory/new/";
  static profile_laboratory: string = "/dashboard/laboratory/profile/:id";
  static edit_laboratory: string = "/dashboard/laboratory/edit/:id";
  static task: string = "/dashboard/Task/";
  static task_new: string = "/dashboard/Task/new/";
  static task_profile: string = "/dashboard/Task/profile/:id";
  static task_edit: string = "/dashboard/Task/edit/:id";
  static member: string = "/dashboard/Member";
  static member_new: string = "/dashboard/Member/new/";
  static member_profile: string = "/dashboard/Member/profile/:id";
  static member_user_edit: string = "/dashboard/Member/UserEdit/:id";
  static member_edit_profile: string = "/dashboard/Member/EditProfile/:id";
  static equip_new: string = "/dashboard/Equip/new/";
  static equip: string = "/dashboard/Equip/";
  static equip_profile: string = "/dashboard/Equip/profile/:id";
  static equip_edit: string = "/dashboard/Equip/edit/:id";
  static discussion: string = "/dashboard/Discussion/panel/:id";
  static discussion_new: string = "/dashboard/Discussion/new/:topic/:section";
	static setting:string ='/dashboard/Setting/';
	static ticketing:string ='/dashboard/Ticketing/';
	static ticketing_new:string ='/dashboard/Ticketing/new';
	static library_page:string ='/library/page';
	static register_page:string ='/register';
  static discussion_list: string = "/dashboard/Discussion/list/";
  static data: string = "/dashboard/Data/";
  static data_new: string = "/dashboard/Data/new";
  static data_mydata: string = "/dashboard/Data/mydata/";
  static data_profile: string = "/dashboard/Data/profile/:dataid/:appTaskId";
  static data_edit: string = "/dashboard/Data/edit/:dataid/:appTaskId";
  static publish: string = "/dashboard/Publish/";
  static publish_new: string = "/dashboard/Publish/new";
  static publish_upload: string = "/dashboard/Publish/upload/:id";
  static expense: string = "/dashboard/Expense/";
  static expense_new: string = "/dashboard/Expense/new";
  static expense_profile: string = "/dashboard/Expense/profile/:id";
  static ticketing_ticket: string = "/dashboard/Ticketing/ticket/:id";
  static admin_dashboard: string = "/dashboard/Admin";
  static admin_clients: string = "/dashboard/Admin/clients/";
  static admin_member: string = "/dashboard/Admin/member/:id";
  static admin_payments: string = "/dashboard/Admin/payments/";
  static admin_tickets: string = "/dashboard/Admin/tickets/";
  static admin_ticket: string = "/dashboard/Admin/ticket/";
  static admin_broadcast: string = "/dashboard/Admin/broadcast/";
  static publish_profile:string ='/dashboard/Publish/profile/:id';
	static publish_edit: string = "/dashboard/Publish/edit/:id";
  static expense_edit: string = "/dashboard/Expense/edit/:id";
}
  
