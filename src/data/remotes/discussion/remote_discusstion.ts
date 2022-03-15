import { HTTP } from "../../../core/http_common";
import { DiscusstionCreateReq } from "../../models/requests/discussion/discusstion_create_req";
import { EditEquipmentReq } from "../../models/requests/equipment/equipment_update_req";
import { DiscusstionCreateRes } from "../../models/responses/discussion/discusstion_create_res";
import { DiscusstionSearchRes } from "../../models/responses/discussion/discusstion_search_res";
import { GetAllDiscusstionRes } from "../../models/responses/discussion/get_all_discusstion_res";
import { EditEquipmentRes } from "../../models/responses/equipment/equipment_update_res";
import { GetAllEquipment } from "../../models/responses/equipment/get_all_equipment_res";
import { GetEquimentByIDRes } from "../../models/responses/equipment/get_equipment_by_id_res";

export class RemoteDiscusstion {
  createDiscusstion(
    body: DiscusstionCreateReq,
    action: (res: DiscusstionCreateRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/Discussion", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  updateEquipment(
    body: EditEquipmentReq,
    action: (res: EditEquipmentRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.put("/Equipment", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getAllDiscussion(
    body: { PageNumber: number; PageSize: number , ticket:boolean },
    action: (res: GetAllDiscusstionRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/Discussion?PageSize=${body.PageSize}&PageNumber=${body.PageNumber}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getEquipmentById(
    body: { equipmentId: number },
    action: (res: GetEquimentByIDRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Equipment/${body.equipmentId}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  DiscusstionSearch(
    body: { discussionTopic: number; isTicket: boolean },
    action: (res: DiscusstionSearchRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/Discussion/Search?discussionTopic=${body.discussionTopic}&isTicket=${body.isTicket}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
