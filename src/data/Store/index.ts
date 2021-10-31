
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createStore} from "redux";
import reducer from './redusers/User'
export const store = createStore(reducer);
