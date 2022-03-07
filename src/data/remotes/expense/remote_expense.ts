import { HTTP } from "../../../core/http_common";
import { CreateExpenseReq } from "../../models/requests/expense/create_expense_req";
import { CreateExpenseRes } from "../../models/responses/expense/create_expense_res";

export class RemoteExpense {
  createExpense(body:CreateExpenseReq,action: (res: CreateExpenseRes) => any,error: (res: any) => any){
    return HTTP.post("/Expense" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}