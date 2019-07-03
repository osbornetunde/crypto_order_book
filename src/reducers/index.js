import { combineReducers } from "redux";
import pair from "./pair";
import subscribeValue from "./subscribe";
import unSubscribeValue from "./unSubscribe";
import orderData from "./fetchData";
import stopStream from "./stopStream";

const rootReducer = combineReducers({
  pair,
  subscribeValue,
  unSubscribeValue,
  orderData,
  stopStream
});

export default rootReducer;
