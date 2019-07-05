import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectPair } from "../actions/pairsAction";
import {
  subscribe,
  fetchData,
  unSubscribe,
  stopStream,
  fetchStart,
  fetchEnd
} from "../actions/apiAction";
import StyledSelect from "../components/StyledSelect";
import StyledMainContainer from "../components/StyledMainContainer";
import StyledButton from "../components/StyledButton";

const Main = props => {
  const {
    pair,
    subscribe,
    unSubscribe,
    subscribeValue,
    unSubscribeValue,
    selectPair,
    fetchData,
    stopStream,
    fetchStart,
    fetchEnd
  } = props;

  useEffect(() => {
    const subscription = setTimeout(() => {
      subscribe(pair);
    }, 1000);
    return () => clearTimeout(subscription);
  }, [pair, subscribe]);

  useEffect(() => {
    const stoppingStream = setTimeout(() => {
      stopStream(unSubscribeValue);
    }, 1000);
    return () => clearTimeout(stoppingStream);
  }, [pair, stopStream, unSubscribeValue]);

  const setCurrentPair = e => {
    e.preventDefault();
    unSubscribe(pair);
    selectPair(e.target.value);
    fetchEnd(false);
  };

  const fetchDataHandler = () => {
    if (pair === "") {
      return null;
    }
    fetchStart(true);
    fetchData(subscribeValue);
  };

  const stopStreamHandler = () => {
    unSubscribe(pair);
    selectPair("");
    fetchEnd(false);
    stopStream(unSubscribeValue);
  };

  return (
    <StyledMainContainer>
      <StyledSelect value={pair} onChange={setCurrentPair}>
        <option value="" hidden>
          Select Currency Pair
        </option>
        <option value="bchbtc">BCH/BTC</option>
        <option value="bcheur">BCH/EUR</option>
        <option value="bchusd">BCH/USD</option>
        <option value="btceur">BTC/EUR</option>
        <option value="btcusd">BTC/USD</option>
        <option value="ethbtc">ETH/BTC</option>
        <option value="etheur">ETH/EUR</option>
        <option value="ethusd">ETH/USD</option>
        <option value="eurusd">EUR/USD</option>
        <option value="ltcbtc">LTC/BTC</option>
        <option value="ltceur">LTC/EUR</option>
        <option value="ltcusd">LTC/USD</option>
        <option value="xrpeur">XRP/EUR</option>
        <option value="xrpbtc">XRP/BTC</option>
        <option value="xrpusd">XRP/USD</option>
      </StyledSelect>
      <StyledButton onClick={fetchDataHandler}>Submit</StyledButton>
      <StyledButton onClick={stopStreamHandler} isStop isStopHover isStopFocus>
        Stop
      </StyledButton>
    </StyledMainContainer>
  );
};

const mapStateToProps = state => ({
  pair: state.pair,
  subscribeValue: state.subscribeValue,
  unSubscribeValue: state.unSubscribeValue
});

export default connect(
  mapStateToProps,
  {
    selectPair,
    subscribe,
    unSubscribe,
    fetchData,
    stopStream,
    fetchEnd,
    fetchStart
  }
)(Main);
