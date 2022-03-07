import { toast } from "react-toastify";
import { CreatePublishReq } from "../../data/models/requests/publish/create_publish_req";
import { CreatePublishResResult } from "../../data/models/responses/publish/create_publish_res";
import { RemoteExpense } from "../../data/remotes/expense/remote_expense";
export class expenseController {
  remote = new RemoteExpense();

  createExpense(
    body: CreatePublishReq,
    action: (res: CreatePublishResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createExpense(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
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
