import { toast } from "react-toastify";
import { LocalDataSources } from "../../data/local_datasources";
import { LaboratoryCreateReq } from "../../data/models/requests/laboratory/laboratory_create_req";
import { UpdateLaboratoryReq } from "../../data/models/requests/laboratory/laboratory_update_req";
import { GetLaboratoryByIDResult } from "../../data/models/responses/laboratory/laboratory_by_id_res";
import { LaboratoryCreateResResult } from "../../data/models/responses/laboratory/laboratory_create_res";
import { LaboratoryGetAllResResult } from "../../data/models/responses/laboratory/laboratory_get_all_res";
import { UpdateLaboratoryResResult } from "../../data/models/responses/laboratory/laboratory_update_res";
import { LboratorySearchResResult } from "../../data/models/responses/laboratory/laboratory_search_res";
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
  getLaboratorySearch(action: (res: LboratorySearchResResult) => any) {
    this.remote.getLaboratorySearch(
      (res) => {
        action(res.result);
      },
      (err) => {}
    );
  }
  getLaboratoryGetAll(
    body: { PageNumber: number; PageSize: number },
    action: (res: LaboratoryGetAllResResult) => any
  ) {
    this.remote.getLaboratoryGetAll(
      body,
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
