import { createAction } from "redux-actions";
import ws from "../api";
import {
  SUBSCRIBE,
  UNSUBSCRIBE,
  STOP_STREAM,
  FETCH_START,
  FETCH_END,
  FETCH_DATA_RESPONSE
} from "../constants/actionTypes";

export const fetchStart = createAction(FETCH_START);
export const fetchEnd = createAction(FETCH_END);

export const fetchData = value => {
  return async dispatch => {
    await ws.send(JSON.stringify(value));

    ws.onmessage = event => {
      const response = JSON.parse(event.data);
      dispatch({ type: FETCH_DATA_RESPONSE, payload: response.data });

      //   if (Object.keys(response.data).length !== 0) {
      //     dispatch(fetchEnd(false));
      //   }
      //   return null;
    };

    // ws.onerror = () => {
    //   console.log("error from server");
    // };
    // ws.onclose = (event) => {
    //   // dispatch(fetchEnd(false));
    //   // setTimeout(() => dispatch(fetchEnd(false)), 20000);
    //   const response = JSON.parse(event.data);
    //   dispatch({ type: STOP_STREAM, payload: response.data });
    // };
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
