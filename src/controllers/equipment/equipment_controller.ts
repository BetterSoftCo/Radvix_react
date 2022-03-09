import { toast } from "react-toastify";
import { EquipmentCreateReq } from "../../data/models/requests/equipment/equipment_create_req";
import { EquipmentCreateResResult } from "../../data/models/responses/equipment/equipment_create_res";
import { EquipmentSearchResResult } from "../../data/models/responses/equipment/equipment_search_res";
import { GetAllEquipmentResult } from "../../data/models/responses/equipment/get_all_equipment_res";
import { GetEquimentByIDResResult } from "../../data/models/responses/equipment/get_equipment_by_id_res";
import { RemoteEquipment } from "../../data/remotes/equipment/remote_equipment";
export class EquipmentController {
  remote = new RemoteEquipment();

  createEquipment(
    body: EquipmentCreateReq,
    action: (res: EquipmentCreateResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createEquipment(
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
      }
    );
  }
  getAllEquipments(
    body: { PageNumber: number; PageSize: number },
    action: (res: GetAllEquipmentResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getAllEquipments(
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
      }
    );
  }
  getEquipment(
    body: { equipmentId: number },
    action: (res: GetEquimentByIDResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getEquipmentById(
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
      }
    );
  }
  EquipmentsSearch(
    action: (res: EquipmentSearchResResult[]) => any,
    error: (res: any) => any
  ) {
    this.remote.EquipmentsSearch(
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
        error(err)
      }
    );
  }
}
