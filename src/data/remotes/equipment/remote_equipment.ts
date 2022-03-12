import { HTTP } from "../../../core/http_common";
import { EquipmentCreateReq } from "../../models/requests/equipment/equipment_create_req";
import { EditEquipmentReq } from "../../models/requests/equipment/equipment_update_req";
import { EquipmentCreateRes } from "../../models/responses/equipment/equipment_create_res";
import { EquipmentSearchRes } from "../../models/responses/equipment/equipment_search_res";
import { EditEquipmentRes } from "../../models/responses/equipment/equipment_update_res";
import { GetAllEquipment } from "../../models/responses/equipment/get_all_equipment_res";
import { GetEquimentByIDRes } from "../../models/responses/equipment/get_equipment_by_id_res";

export class RemoteEquipment {
  createEquipment(body:EquipmentCreateReq,action: (res: EquipmentCreateRes) => any,error: (res: any) => any){
    return HTTP.post("/Equipment" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  updateEquipment(body:EditEquipmentReq,action: (res: EditEquipmentRes) => any,error: (res: any) => any){
    return HTTP.put("/Equipment" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getAllEquipments(body:{ PageNumber: number; PageSize: number },action: (res: GetAllEquipment) => any,error: (res: any) => any){
    return HTTP.get(`/Equipment?PageSize=${body.PageSize}&PageNumber=${body.PageNumber}`).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getEquipmentById(body:{ equipmentId: number },action: (res: GetEquimentByIDRes) => any,error: (res: any) => any){
    return HTTP.get(`/Equipment/${body.equipmentId}`).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  EquipmentsSearch(action: (res: EquipmentSearchRes) => any,error: (res: any) => any){
    return HTTP.get('/Equipment/Search').then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
