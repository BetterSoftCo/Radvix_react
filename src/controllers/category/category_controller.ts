import { toast } from "react-toastify";
import { GetAllCategoriesResult } from "../../data/models/responses/category/get_all_categories";
import { RemoteCategory } from "../../data/remotes/category/remote_category";
export class CategoryController {
  remote = new RemoteCategory();

  getAllCategories(
    body: { type: number},
    action: (res: GetAllCategoriesResult[]) => any
  ) {
    this.remote.getAllCategories(
      body,
      (res) => action(res.result!),
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
 
}
