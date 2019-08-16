import { SELECT_PAIR } from "../../constants/actionTypes";
import pairs from "../../reducers/pair";

describe("Pair reducers", () => {
  const initialState = "";

  it("should return the initial State", () => {
    expect(pairs(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_START", () => {
    expect(
      pairs(initialState, {
        type: SELECT_PAIR,
        payload: "abc"
      })
    ).toEqual("abc");
  });
});
