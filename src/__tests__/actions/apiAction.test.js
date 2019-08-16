import nock from "nock";
import { mockStore } from "../../mockStore/mockStore";
import * as actions from "../../actions/apiAction";
import {
  SUBSCRIBE,
  UNSUBSCRIBE,
  STOP_STREAM,
  FETCH_START,
  FETCH_END,
  FETCH_DATA_RESPONSE
} from "../../constants/actionTypes";

describe("API Actions", () => {
  it("fetch Start", () => {
    const expectedValue = {
      type: FETCH_START
    };
    expect(actions.fetchStart()).toEqual(expectedValue);
  });

  it("fetch End", () => {
    const expectedValue = {
      type: FETCH_END
    };
    expect(actions.fetchEnd()).toEqual(expectedValue);
  });

  it("fetch should return data", () => {
    const data = nock("https://jsonplaceholder.typicode.com/users")
      .get("/abc")
      .delay(2000)
      .reply(200, {
        id: 124,
        name: "test",
        email: "test@gmail.com"
      });
    const store = mockStore();
    store.dispatch({
      type: FETCH_DATA_RESPONSE,
      payload: JSON.parse(data.interceptors[0].body)
    });
    const action = store.getActions();
    const expectedAction = {
      type: "FETCH_DATA_RESPONSE",
      payload: {
        id: 124,
        name: "test",
        email: "test@gmail.com"
      }
    };
    expect(action).toEqual([expectedAction]);
  });

  it("unsubscribe from channel", () => {
    const pairs = "BTC/USD";
    const expectedAction = {
      type: UNSUBSCRIBE,
      payload: {
        event: "bts:unsubscribe",
        data: {
          channel: `order_book_${pairs}`
        }
      }
    };
    expect(actions.unSubscribe(pairs)).toEqual(expectedAction);
  });

  it("subscribe to channel", () => {
    const pairs = "BTC/USD";
    const expectedAction = {
      type: SUBSCRIBE,
      payload: {
        event: "bts:subscribe",
        data: {
          channel: `order_book_${pairs}`
        }
      }
    };
    expect(actions.subscribe(pairs)).toEqual(expectedAction);
  });
  it("should stop stream", () => {
    const data = nock("https://jsonplaceholder.typicode.com/users")
      .get("/abc")
      .delay(2000)
      .reply(200, {});
    const store = mockStore();
    store.dispatch({
      type: STOP_STREAM,
      payload: JSON.parse(data.interceptors[0].body)
    });
    const action = store.getActions();
    const expectedAction = {
      type: STOP_STREAM,
      payload: {}
    };
    expect(action).toEqual([expectedAction]);
  });
});
