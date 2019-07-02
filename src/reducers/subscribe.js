import { handleActions } from "redux-actions";
import { SUBSCRIBE } from "../constants/actionTypes";

export default handleActions(
  {
    [SUBSCRIBE]: (state, action) => action.payload
  },
  {}
);
