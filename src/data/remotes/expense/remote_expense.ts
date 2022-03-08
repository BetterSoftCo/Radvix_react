import { HTTP } from "../../../core/http_common";
import { CreateExpenseReq } from "../../models/requests/expense/create_expense_req";
import { CreateExpenseRes } from "../../models/responses/expense/create_expense_res";
import { GetAllExpenses } from "../../models/responses/expense/expenses_res";
import { GetExpenseByID } from "../../models/responses/expense/expense_by_id_res";
import { SearchExpenseRes } from "../../models/responses/expense/search_expense_res";

export class RemoteExpense {
  createExpense(body:CreateExpenseReq,action: (res: CreateExpenseRes) => any,error: (res: any) => any){
    return HTTP.post("/Expense" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  SearchExpense(
    body: { researchId: number },
    action: (res: SearchExpenseRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Expense/Search?researchId=${body.researchId}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getExpenses(body:{PageNumber:number , PageSize:number , ResearchId: number},action: (res: GetAllExpenses) => any,error: (res: any) => any){
    return HTTP.get(`/Expense?PageNumber=${body.PageNumber}&PageSize=${body.PageSize}&ResearchId=${body.ResearchId}` ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getExpenseById(
    body: { id: number },
    action: (res: GetExpenseByID) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Expense/${body.id}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}