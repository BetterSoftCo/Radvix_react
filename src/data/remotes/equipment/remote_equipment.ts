import { HTTP } from "../../../core/http_common";
import { EquipmentCreateReq } from "../../models/requests/equipment/equipment_create_req";
import { EquipmentCreateRes } from "../../models/responses/equipment/equipment_create_res";

export class RemoteEquipment {
  createEquipment(body:EquipmentCreateReq,action: (res: EquipmentCreateRes) => any,error: (res: any) => any){
    return HTTP.post("/Equipment/Create" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
