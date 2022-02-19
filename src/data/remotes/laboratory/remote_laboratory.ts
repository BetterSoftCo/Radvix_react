import { HTTP } from "../../../core/http_common";
import { LaboratoryCreateReq } from "../../models/requests/laboratory/laboratory_create_req";
import { LaboratoryCreateRes } from "../../models/responses/laboratory/laboratory_create_res";
import { LaboratoryUsersCategoriesRes } from "../../models/responses/laboratory/laboratory_users_categories_res";

export class RemoteLaboratory {
  createLaboratory(body:LaboratoryCreateReq,action: (res: LaboratoryCreateRes) => any,error: (res: any) => any){
    return HTTP.post("/Laboratory/Create" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getLaboratoryUsersAndCategories(action: (res: LaboratoryUsersCategoriesRes) => any,error: (res: any) => any){
    return HTTP.get("/Laboratory/Get-Users-Categories" ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
