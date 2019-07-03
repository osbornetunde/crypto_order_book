import { handleActions } from "redux-actions";
import { STOP_STREAM, FETCH_DATA_RESPONSE } from "../constants/actionTypes";

export default handleActions(
  {
    [FETCH_DATA_RESPONSE]: (state, action) => action.payload,
    [STOP_STREAM]: (state, action) => action.payload
  },
  []
);
