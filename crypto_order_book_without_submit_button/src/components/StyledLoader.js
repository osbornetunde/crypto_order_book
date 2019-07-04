import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.span`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: rgba(0, 6, 57, 1);
  border-top-color: rgba(0, 6, 57, 1);
  border-radius: 50%;
  display: inline-block;
  margin: 0 auto;
  animation: ${rotate360} 600ms infinite linear;
`;

export default StyledLoader;
