import { handleActions } from "redux-actions";
import { FETCH_START, FETCH_END } from "../constants/actionTypes";

export default handleActions(
  {
    [FETCH_START]: (state, action) => action.payload,
    [FETCH_END]: (state, action) => action.payload
  },
  false
);
