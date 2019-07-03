import { handleActions } from "redux-actions";
import { FETCH_DATA, STOP_STREAM } from "../constants/actionTypes";

export default handleActions(
  {
    [FETCH_DATA]: (state, action) => action.payload,
    [STOP_STREAM]: (state, action) => action.payload
  },
  []
);
