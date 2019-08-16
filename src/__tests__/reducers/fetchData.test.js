import { STOP_STREAM, FETCH_DATA_RESPONSE } from "../../constants/actionTypes";
import orderData from "../../reducers/fetchData";

describe("fetch data reducers", () => {
  const initialState = [];

  it("should return the initial State", () => {
    expect(orderData(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_DATA_RESPONSE", () => {
    expect(
      orderData(initialState, {
        type: FETCH_DATA_RESPONSE,
        payload: "123"
      })
    ).toEqual("123");
  });

  it("should handle STOP_STREAM", () => {
    expect(
      orderData(initialState, {
        type: STOP_STREAM,
        payload: {}
      })
    ).toEqual({});
  });
});
