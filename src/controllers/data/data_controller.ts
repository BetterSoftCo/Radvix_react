import { toast } from "react-toastify";
import { AddDataReq } from "../../data/models/requests/data/add_data_req";
import { AddDataResResult } from "../../data/models/responses/data/add_data_res";
import { RemoteData } from "../../data/remotes/data/remote_data";
export class DataController {
  remote = new RemoteData();

  createData(
    body: AddDataReq,
    action: (res: AddDataResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createData(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        error(err);
      }
    );
  }
}
