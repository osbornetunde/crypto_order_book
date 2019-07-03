import styled, { keyframes } from "styled-components";
import { devices } from "../utils/styledUtils";

const show = keyframes`
to {
  transform:scale(1);
  opacity: 1;
}
`;

const StyledModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(103, 196, 98, 0.7);
  z-index: 100;
  &,
  & > * {
    transform: scale(0.5);
    opacity: 0;
    animation: ${show} 1000ms forwards;
  }

  ${devices.md`
    margin: auto;
  `}
`;

export default StyledModalBackdrop;
