import { HTTP } from "../../../core/http_common";
import { LaboratoryCreateReq } from "../../models/requests/laboratory/laboratory_create_req";
import { UpdateLaboratoryReq } from "../../models/requests/laboratory/laboratory_update_req";
import { GetLaboratoryByID } from "../../models/responses/laboratory/laboratory_by_id_res";
import { LaboratoryCreateRes } from "../../models/responses/laboratory/laboratory_create_res";
import { LaboratoryGetAllRes } from "../../models/responses/laboratory/laboratory_get_all_res";
import { UpdateLaboratoryRes } from "../../models/responses/laboratory/laboratory_update_req";
import {LboratorySearchRes} from "../../models/responses/laboratory/laboratory_search_res"
export class RemoteLaboratory {
  createLaboratory(
    body: LaboratoryCreateReq,
    action: (res: LaboratoryCreateRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/Laboratory", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getLaboratorySearch(
    action: (res: LboratorySearchRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get("/Laboratory/Search")
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getLaboratoryGetAll(
    body: string,
    action: (res: LaboratoryGetAllRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Laboratory/GetAll?userId=${body}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  updateLaboratory(
    body: UpdateLaboratoryReq,
    action: (res: UpdateLaboratoryRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.put("/Laboratory/Edit", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getLaboratoryById(
    body: { id: number },
    action: (res: GetLaboratoryByID) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Laboratory/Profile?id=${body.id}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
