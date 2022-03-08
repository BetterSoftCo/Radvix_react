import { HTTP } from "../../../core/http_common";
import { EquipmentCreateReq } from "../../models/requests/equipment/equipment_create_req";
import { EquipmentCreateRes } from "../../models/responses/equipment/equipment_create_res";
import { EquipmentSearchRes } from "../../models/responses/equipment/equipment_search_res";
import { GetAllEquipment } from "../../models/responses/equipment/get_all_equipment_res";

export class RemoteEquipment {
  createEquipment(body:EquipmentCreateReq,action: (res: EquipmentCreateRes) => any,error: (res: any) => any){
    return HTTP.post("/Equipment" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getAllEquipments(body:{userId:string},action: (res: GetAllEquipment) => any,error: (res: any) => any){
    return HTTP.get(`/Equipment/GetAll?userId=${body.userId}`).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  EquipmentsSearch(action: (res: EquipmentSearchRes) => any,error: (res: any) => any){
    return HTTP.get('/Equipment/Search').then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
