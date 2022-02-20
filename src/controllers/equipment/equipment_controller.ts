import { toast } from "react-toastify";
import { EquipmentCreateReq } from "../../data/models/requests/equipment/equipment_create_req";
import { EquipmentCreateResResult } from "../../data/models/responses/equipment/equipment_create_res";
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
}
