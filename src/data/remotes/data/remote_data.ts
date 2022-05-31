import { HTTP } from "../../../core/http_common";
import { AddDataReq } from "../../models/requests/data/add_data_req";
import { UpdateDataReq } from "../../models/requests/data/update_data_req";
import { AddDataRes } from "../../models/responses/data/add_data_res";
import { GetAllDataRes } from "../../models/responses/data/get_all_data_res";
import { GetDataByIDRes } from "../../models/responses/data/get_by_id_data_res";
import { SearchDataRes } from "../../models/responses/data/search_data_res";
import { UpdateDataRes } from "../../models/responses/data/update_data_res";

export class RemoteData {
  createData(body: AddDataReq, action: (res: AddDataRes) => any, error: (res: any) => any) {
    return HTTP.post("/Data", body).then((res) => action(res.data)).catch((err) => { error(err) });
  }
  updateData(body: UpdateDataReq, action: (res: UpdateDataRes) => any, error: (res: any) => any) {
    return HTTP.put("/Data", body).then((res) => action(res.data)).catch((err) => { error(err) });
  }
  SearchData(body: { researchId: number }, action: (res: SearchDataRes) => any, error: (res: any) => any) {
    return HTTP.get(`/Data/Search?researchId=${body.researchId}`).then((res) => action(res.data)).catch((err) => { error(err) });
  }
  getAllData(body: { researchId: number, PageSize: number, PageNumber: number, SearchParameter: string }, action: (res: GetAllDataRes) => any, error: (res: any) => any) {
    return HTTP.get(`/Data?ResearchId=${body.researchId}&PageSize=${body.PageSize}&PageNumber=${body.PageNumber}&SearchParameter=${body.SearchParameter}`).then((res) => action(res.data)).catch((err) => { error(err) });
  }
  getDataById(body: { dataId: number, researchId: number, appTaskId: number }, action: (res: GetDataByIDRes) => any, error: (res: any) => any) {
    return HTTP.get(`/Data/${body.dataId}?researchId=${body.researchId}&appTaskId=${body.appTaskId}`).then((res) => action(res.data)).catch((err) => { error(err) });
  }
}
