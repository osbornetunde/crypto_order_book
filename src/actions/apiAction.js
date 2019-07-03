import { createAction } from "redux-actions";
import ws from "../api";
import {
  SUBSCRIBE,
  UNSUBSCRIBE,
  FETCH_DATA,
  STOP_STREAM
} from "../constants/actionTypes";

// export const unSubscribe = createAction(UNSUBSCRIBE);
// export const fetchDataRequest = createAction(FETCH_DATA_REQUEST);
// export const fetchDataResponse = createAction(FETCH_DATA_RESPONSE);

export const fetchData = value => {
  return async dispatch => {
    await ws.send(JSON.stringify(value));
    ws.onmessage = event => {
      const response = JSON.parse(event.data);
      dispatch({ type: FETCH_DATA, payload: response.data });
    };
  };
};

export const subscribe = pairs => ({
  type: SUBSCRIBE,
  payload: {
    event: "bts:subscribe",
    data: {
      channel: `order_book_${pairs}`
    }
  }
});

export const unSubscribe = pairs => ({
  type: UNSUBSCRIBE,
  payload: {
    event: "bts:unsubscribe",
    data: {
      channel: `order_book_${pairs}`
    }
  }
});

export const stopStream = value => {
  return async dispatch => {
    await ws.send(JSON.stringify(value));
    ws.onmessage = event => {
      const response = JSON.parse(event.data);
      dispatch({ type: STOP_STREAM, payload: response.data });
    };
    // ws.onclose = event => {
    //   console.log("connection closed");
    //   const response = JSON.parse(event.data);
    //   dispatch({ type: STOP_STREAM, payload: response.data });
    // };
  };
};
