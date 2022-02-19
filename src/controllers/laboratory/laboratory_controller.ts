import { toast } from "react-toastify";
import { LaboratoryCreateReq } from "../../data/models/requests/laboratory/laboratory_create_req";
import { LaboratoryCreateResResult } from "../../data/models/responses/laboratory/laboratory_create_res";
import { RemoteLaboratory } from "../../data/remotes/laboratory/remote_laboratory";
export class LaboratoryController {
  remote = new RemoteLaboratory();

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
}
