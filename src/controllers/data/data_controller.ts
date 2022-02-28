import { toast } from "react-toastify";
import { AddDataReq } from "../../data/models/requests/data/add_data_req";
import { AddDataResResult } from "../../data/models/responses/data/add_data_res";
import { GetAllDataRes, GetAllDataResResult } from "../../data/models/responses/data/get_all_data_res";
import { SearchDataResResult } from "../../data/models/responses/data/search_data_res";
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
    body: { PageSize: number, PageNumber: number },
    action: (res: GetAllDataResResult) => any,
    error: (res: any) => any,
  ) {
    if (store.getState().ResearchId > 0) {
      this.remote.getAllData(
        { researchId: store.getState().ResearchId , ...body },
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
}
