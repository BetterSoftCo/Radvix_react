// export const  rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
import { createStore, applyMiddleware, Store } from "redux";
import reducer from './redusers/User'
export const store = createStore(reducer);
