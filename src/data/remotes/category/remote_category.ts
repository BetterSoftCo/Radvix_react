import { HTTP } from "../../../core/http_common";
import { GetAllCategories } from "../../models/responses/category/get_all_categories";

export class RemoteCategory {
  getAllCategories(body:{type:number},action: (res: GetAllCategories) => any,error: (res: any) => any){
    return HTTP.get(`/Category?type=${body.type}`).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}