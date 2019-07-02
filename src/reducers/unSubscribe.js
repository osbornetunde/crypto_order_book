import { handleActions } from "redux-actions";
import { UNSUBSCRIBE } from "../constants/actionTypes";

export default handleActions(
  {
    [UNSUBSCRIBE]: (state, action) => action.payload
  },
  {}
);
