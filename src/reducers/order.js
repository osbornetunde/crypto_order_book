import { handleActions } from "redux-action";
import { SUBSCRIBE } from "../actions";

export default handleActions(
  {
    [SUBSCRIBE]: (state, action) => state
  },
  {}
);
