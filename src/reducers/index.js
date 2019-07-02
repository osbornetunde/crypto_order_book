import { combineReducers } from "redux";
import pair from "./pair";
import subscribeValue from "./subscribe";
import unSubscribeValue from "./unSubscribe";
import orderData from "./fetchData";

const rootReducer = combineReducers({
  pair,
  subscribeValue,
  unSubscribeValue,
  orderData
});

export default rootReducer;
