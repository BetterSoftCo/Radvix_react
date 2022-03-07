
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createStore} from "redux";
import rootReducer from "./redusers";
export const store = createStore(rootReducer);
