import { FETCH_START, FETCH_END } from "../../constants/actionTypes";
import isLoading from "../../reducers/isLoading";

describe("isLoading reducers", () => {
  const initialState = false;

  it("should return the initial State", () => {
    expect(isLoading(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_START", () => {
    expect(
      isLoading(initialState, {
        type: FETCH_START,
        payload: true
      })
    ).toEqual(true);
  });

  it("should handle FETCH_END", () => {
    expect(
      isLoading(initialState, {
        type: FETCH_END,
        payload: false
      })
    ).toEqual(false);
  });
});
