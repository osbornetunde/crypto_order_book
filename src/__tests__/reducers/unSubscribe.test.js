import { UNSUBSCRIBE } from "../../constants/actionTypes";
import unSubscribe from "../../reducers/unSubscribe";

describe("unSubscribe reducers", () => {
  const initialState = {};

  it("should return the initial State", () => {
    expect(unSubscribe(undefined, {})).toEqual(initialState);
  });

  it("should handle UNSUBSCRIBE", () => {
    expect(
      unSubscribe(initialState, {
        type: UNSUBSCRIBE,
        payload: {
          event: "bts:unsubscribe",
          data: {
            channel: `order_book_btcusd`
          }
        }
      })
    ).toEqual({
      event: "bts:unsubscribe",
      data: {
        channel: `order_book_btcusd`
      }
    });
  });
});
