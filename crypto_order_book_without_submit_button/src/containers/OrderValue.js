import React from "react";
import { connect } from "react-redux";
import StyledOrderValue from "../components/StyledOrderValue";
import StyledOrderedList from "../components/StyledOrderedList";
import StyledList from "../components/StyledList";
import StyledOrderValueHeader from "../components/StyledOrderValueHeader";
import StyledLoader from "../components/StyledLoader";

const OrderValue = props => {
  const {
    orderData: { bids, asks }
  } = props;
  const renderPrices = prices => {
    return prices.map((price, index) => {
      return (
        <StyledList key={index}>
          {`${price[1]}   ${props.pair.slice(-6, 3).toUpperCase()} @ ${
            price[0]
          }  ${props.pair.slice(3).toUpperCase()}`}{" "}
        </StyledList>
      );
    });
  };

  const renderValuesWithoutButtonClick = () => {
    if (props.orderData.bids === undefined) {
      if (props.isLoading === false) {
        return (
          <StyledOrderValue isAligned>
            <StyledOrderValueHeader>
              Please Select Currency Pair
            </StyledOrderValueHeader>
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
          {renderPrices(bids)}
        </StyledOrderedList>
        <StyledOrderedList>
          <StyledOrderValueHeader>Asks</StyledOrderValueHeader>
          {renderPrices(asks)}
        </StyledOrderedList>
      </StyledOrderValue>
    );
  };

  // const renderValues = () => {
  //   if (props.orderData.bids === undefined) {
  //     if (props.isLoading === false) {
  //       return (
  //         <StyledOrderValue isAligned>
  //           {props.pair === "" ? (
  //             <StyledOrderValueHeader>
  //               Please Select Currency Pair
  //             </StyledOrderValueHeader>
  //           ) : (
  //             <StyledOrderValueHeader>
  //               Click Submit to get the prices
  //             </StyledOrderValueHeader>
  //           )}
  //         </StyledOrderValue>
  //       );
  //     } else if (props.isLoading === true) {
  //       return (
  //         <StyledOrderValue isAligned>
  //           <StyledLoader />
  //         </StyledOrderValue>
  //       );
  //     }
  //   }
  //   return (
  //     <StyledOrderValue>
  //       <StyledOrderedList>
  //         <StyledOrderValueHeader>Bids</StyledOrderValueHeader>
  //         {renderBids()}
  //       </StyledOrderedList>
  //       <StyledOrderedList>
  //         <StyledOrderValueHeader>Asks</StyledOrderValueHeader>
  //         {renderAsks()}
  //       </StyledOrderedList>
  //     </StyledOrderValue>
  //   );
  // };
  return renderValuesWithoutButtonClick();
};

const mapStateToProps = state => ({
  orderData: state.orderData,
  pair: state.pair,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(OrderValue);
