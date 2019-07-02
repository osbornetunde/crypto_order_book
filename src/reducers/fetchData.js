import { handleActions } from "redux-actions";
import { FETCH_DATA } from "../constants/actionTypes";

export default handleActions(
  {
    [FETCH_DATA]: (state, action) => action.payload
  },
  []
);
