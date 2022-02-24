import { toast } from "react-toastify";
import { LocalDataSources } from "../../data/local_datasources";
import { LaboratoryCreateReq } from "../../data/models/requests/laboratory/laboratory_create_req";
import { UpdateLaboratoryReq } from "../../data/models/requests/laboratory/laboratory_update_req";
import {
  GetLaboratoryByID,
  GetLaboratoryByIDResult,
} from "../../data/models/responses/laboratory/laboratory_by_id_res";
import { LaboratoryCreateResResult } from "../../data/models/responses/laboratory/laboratory_create_res";
import { LaboratoryGetAllResResult } from "../../data/models/responses/laboratory/laboratory_get_all_res";
import { UpdateLaboratoryResResult } from "../../data/models/responses/laboratory/laboratory_update_req";
import { LaboratoryUsersCategoriesResResult } from "../../data/models/responses/laboratory/laboratory_users_categories_res";
import { RemoteLaboratory } from "../../data/remotes/laboratory/remote_laboratory";
export class LaboratoryController {
  remote = new RemoteLaboratory();
  local = new LocalDataSources();
  createLaboratory(
    body: LaboratoryCreateReq,
    action: (res: LaboratoryCreateResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createLaboratory(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
  updateLaboratory(
    body: UpdateLaboratoryReq,
    action: (res: UpdateLaboratoryResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.updateLaboratory(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
  getLaboratoryUsersAndCategories(
    action: (res: LaboratoryUsersCategoriesResResult) => any
  ) {
    this.remote.getLaboratoryUsersAndCategories(
      (res) => {
        action(res.result);
      },
      (err) => {}
    );
  }
  getLaboratoryGetAll(action: (res: LaboratoryGetAllResResult[]) => any) {
    this.remote.getLaboratoryGetAll(
      this.local.getUserId(),
      (res) => {
        action(res.result);
      },
      (err) => {}
    );
  }
  getLaboratoryById(
    body: { id: number },
    action: (res: GetLaboratoryByIDResult) => any
  ) {
    this.remote.getLaboratoryById(
      body,
      (res) => {
        action(res.result);
      },
      (err) => {}
    );
  }
}
