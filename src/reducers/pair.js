import { handleActions } from "redux-actions";
import { SELECT_PAIR } from "../constants/actionTypes";

export default handleActions(
  {
    [SELECT_PAIR]: (state, action) => action.payload
  },
  {}
);
