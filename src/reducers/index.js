import { combineReducers } from "redux";
import pair from "./pair";
import subscribeValue from "./subscribe";
import unSubscribeValue from "./unSubscribe";
import orderData from "./fetchData";
import isLoading from "./isLoading";

const rootReducer = combineReducers({
  pair,
  subscribeValue,
  unSubscribeValue,
  orderData,
  isLoading
});

export default rootReducer;
