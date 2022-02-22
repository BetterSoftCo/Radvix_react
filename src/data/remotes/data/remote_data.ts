import { HTTP } from "../../../core/http_common";
import { AddDataReq } from "../../models/requests/data/add_data_req";
import { AddDataRes } from "../../models/responses/data/add_data_res";

export class RemoteData {
  createData(body:AddDataReq,action: (res: AddDataRes) => any,error: (res: any) => any){
    return HTTP.post("/Data" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
