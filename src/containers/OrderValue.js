import React from "react";
import { connect } from "react-redux";

const OrderValue = props => {
  const renderAsks = () => {
    return props.orderData.asks.map((ask, index) => {
      return (
        <li key={index}>
          {`${ask[1]}   ${props.pair.slice(-6, 3).toUpperCase()} @ ${
            ask[0]
          }  ${props.pair.slice(3).toUpperCase()}`}{" "}
        </li>
      );
    });
  };
  const renderBids = () => {
    // console.log("order book", props.orderData.asks);
    // return null;
    // const { orderData, pair } = props;

    return props.orderData.bids.map((bid, index) => {
      return (
        <li key={index}>
          {`${bid[1]}   ${props.pair.slice(-6, 3).toUpperCase()} @ ${
            bid[0]
          }  ${props.pair.slice(3).toUpperCase()}`}{" "}
        </li>
      );
    });
  };

  if (props.orderData.bids === undefined) {
    return <div>Loading</div>;
  }
  return (
    <div style={{ display: "flex" }}>
      <ol>{renderBids()}</ol>
      <ol>{renderAsks()}</ol>
    </div>
  );
};

const mapStateToProps = state => ({
  orderData: state.orderData,
  pair: state.pair
});

export default connect(mapStateToProps)(OrderValue);
