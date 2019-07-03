import React from "react";
import { connect } from "react-redux";
import StyledOrderValue from "../components/StyledOrderValue";
import StyledOrderedList from "../components/StyledOrderedList";
import StyledList from "../components/StyledList";
import StyledOrderValueHeader from "../components/StyledOrderValueHeader";
import StyledLoader from "../components/StyledLoader";

const OrderValue = props => {
  const renderAsks = () => {
    return props.orderData.asks.map((ask, index) => {
      return (
        <StyledList key={index}>
          {`${ask[1]}   ${props.pair.slice(-6, 3).toUpperCase()} @ ${
            ask[0]
          }  ${props.pair.slice(3).toUpperCase()}`}{" "}
        </StyledList>
      );
    });
  };
  const renderBids = () => {
    return props.orderData.bids.map((bid, index) => {
      return (
        <StyledList key={index}>
          {`${bid[1]}   ${props.pair.slice(-6, 3).toUpperCase()} @ ${
            bid[0]
          }  ${props.pair.slice(3).toUpperCase()}`}{" "}
        </StyledList>
      );
    });
  };

  const renderValues = () => {
    if (props.orderData.bids === undefined) {
      if (props.isLoading === false) {
        return (
          <StyledOrderValue isAligned>
            {props.pair === "" ? (
              <StyledOrderValueHeader>
                Please Select Currency Pair
              </StyledOrderValueHeader>
            ) : (
              <StyledOrderValueHeader>
                Click Submit to get the prices
              </StyledOrderValueHeader>
            )}
          </StyledOrderValue>
        );
      } else if (props.isLoading === true) {
        return (
          <StyledOrderValue isAligned>
            <StyledLoader />
          </StyledOrderValue>
        );
      }
    }
    return (
      <StyledOrderValue>
        <StyledOrderedList>
          <StyledOrderValueHeader>Bids</StyledOrderValueHeader>
          {renderBids()}
        </StyledOrderedList>
        <StyledOrderedList>
          <StyledOrderValueHeader>Asks</StyledOrderValueHeader>
          {renderAsks()}
        </StyledOrderedList>
      </StyledOrderValue>
    );
  };
  return renderValues();
};

const mapStateToProps = state => ({
  orderData: state.orderData,
  pair: state.pair,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(OrderValue);
