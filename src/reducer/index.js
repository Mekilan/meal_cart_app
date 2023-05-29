import { combineReducers } from "redux";
import { orderReducer } from "./reducer";

export const reducer = combineReducers({
  order: orderReducer,
});
