import { handleActions } from "redux-actions";
import { STOP_STREAM } from "../constants/actionTypes";

export default handleActions(
  {
    [STOP_STREAM]: (state, action) => action.payload
  },
  []
);
