import { toast } from "react-toastify";
import { AddDataReq } from "../../data/models/requests/data/add_data_req";
import { UpdateDataReq } from "../../data/models/requests/data/update_data_req";
import { AddDataResResult } from "../../data/models/responses/data/add_data_res";
import { GetAllDataResResult } from "../../data/models/responses/data/get_all_data_res";
import { GetDataByIDResResult } from "../../data/models/responses/data/get_by_id_data_res";
import { SearchDataResResult } from "../../data/models/responses/data/search_data_res";
import { UpdateDataResResult } from "../../data/models/responses/data/update_data_res";
import { RemoteData } from "../../data/remotes/data/remote_data";
import { store } from "../../data/store";
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
  updateData(
    body: UpdateDataReq,
    action: (res: UpdateDataResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.updateData(
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
  SearchData(
    action: (res: SearchDataResResult) => any,
    error: (res: any) => any
  ) {
    if (store.getState().ResearchId > 0) {
      this.remote.SearchData(
        { researchId: store.getState().ResearchId },
        (res) => {
          action(res.result!);
        },
        (err) => {
          toast.error(`${err.message}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          error(err);
        }
      );
    } else {
      toast.error(`please select research`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  getAllData(
    body: { PageSize: number; PageNumber: number , SearchParameter:string},
    action: (res: GetAllDataResResult) => any,
    error: (res: any) => any
  ) {
    if (store.getState().ResearchId > 0) {
      this.remote.getAllData(
        { researchId: store.getState().ResearchId, ...body },
        (res) => {
          action(res.result!);
        },
        (err) => {
          toast.error(`${err.message}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          error(err);
        }
      );
    } else {
      toast.error(`please select research`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  getDataById(
    body: { dataId: number; researchId: number; appTaskId: number },
    action: (res: GetDataByIDResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getDataById(
      body,
      (res) => {
        action(res.result!);
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
