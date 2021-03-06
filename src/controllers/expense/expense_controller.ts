import { toast } from "react-toastify";
import { EditExpenseReq } from "../../data/models/requests/expense/update_expense_req";
import { CreatePublishReq } from "../../data/models/requests/publish/create_publish_req";
import { CreateStateExpenseResResult } from "../../data/models/responses/expense/create_state_expense_res";
import { GetAllExpensesResult } from "../../data/models/responses/expense/expenses_res";
import { GetExpenseByIDResult } from "../../data/models/responses/expense/expense_by_id_res";
import { SearchExpenseResResult } from "../../data/models/responses/expense/search_expense_res";
import { EditExpenseResResult } from "../../data/models/responses/expense/update_publish_res";
import { CreatePublishResResult } from "../../data/models/responses/publish/create_publish_res";
import { RemoteExpense } from "../../data/remotes/expense/remote_expense";
import { store } from "../../data/store";
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
  SearchExpense(
    action: (res: SearchExpenseResResult) => any,
    error: (res: any) => any
  ) {
    if (store.getState().ResearchId > 0) {
      this.remote.SearchExpense(
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
  getExpenses(
    body: { PageNumber: number; PageSize: number , ResearchId: number , SearchParameter:string },
    action: (res: GetAllExpensesResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getExpenses(
      body,
      (res) => {
        action(res.result!);
      },
      (err) => {
        error(err);
      }
    );
  }
  createState(
    body: { expenseId: number; isApproved: boolean},
    action: (res: CreateStateExpenseResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createState(
      body,
      (res) => {
        action(res.result!);
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        error(err);
      }
    );
  }
  getExpenseById(
    body: { id: number },
    action: (res: GetExpenseByIDResult) => any
  ) {
    this.remote.getExpenseById(
      body,
      (res) => {
        action(res.result!);
      },
      (err) => {}
    );
  }
  updateExpense(
    body: EditExpenseReq,
    action: (res: EditExpenseResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.updateExpense(
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
      }
    );
  }
}
