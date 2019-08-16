import { SUBSCRIBE } from "../../constants/actionTypes";
import subscribe from "../../reducers/subscribe";

describe("Subscribe reducers", () => {
  const initialState = {};

  it("should return the initial State", () => {
    expect(subscribe(undefined, {})).toEqual(initialState);
  });

  it("should handle SUBSCRIBE", () => {
    expect(
      subscribe(initialState, {
        type: SUBSCRIBE,
        payload: {
          event: "bts:subscribe",
          data: {
            channel: `order_book_btcusd`
          }
        }
      })
    ).toEqual({
      event: "bts:subscribe",
      data: {
        channel: `order_book_btcusd`
      }
    });
  });
});
