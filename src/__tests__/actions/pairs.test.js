import * as actions from "../../actions/pairsAction";
import { SELECT_PAIR } from "../../constants/actionTypes";

describe("Pair Actions", () => {
  it("Select Pair", () => {
    const expectedAction = {
      type: SELECT_PAIR
    };
    expect(actions.selectPair()).toEqual(expectedAction);
  });
});
