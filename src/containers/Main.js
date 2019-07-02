import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectPair } from "../actions/pairsAction";
import { subscribe, fetchData, unSubscribe } from "../actions/apiAction";
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
    fetchData
  } = props;
  useEffect(() => {
    subscribe(pair);
  }, [pair, subscribe]);

  const setCurrentPair = e => {
    e.preventDefault();
    console.log("UnSubscribe value: ", unSubscribeValue);

    unSubscribe(pair);
    fetchData(unSubscribeValue);
    selectPair(e.target.value);
  };

  const fetchDataHandler = () => {
    if (subscribeValue === undefined) {
      return null;
    }
    console.log("Subscribe value: ", subscribeValue);
    fetchData(subscribeValue);
  };

  return (
    <StyledMainContainer>
      <StyledSelect value={pair} onChange={setCurrentPair}>
        <option defaultValue>Select Currency Pair</option>
        <option value="btcusd">BTC/USD</option>
        <option value="ltcbtc">LTC/BTC</option>
        <option value="bchbtc">BCH/BTC</option>
        <option value="bcheur">BCH/EUR</option>
      </StyledSelect>
      <StyledButton onClick={fetchDataHandler}>Submit</StyledButton>
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
  { selectPair, subscribe, unSubscribe, fetchData }
)(Main);
