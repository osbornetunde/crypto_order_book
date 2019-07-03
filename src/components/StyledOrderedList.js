import styled from "styled-components";
import { devices } from "../utils/styledUtils";
const StyledOrderedList = styled.ol`
display: flex;
flex-direction: column;
align-items: center;
  font-size: 0.9rem;
  color: #000639;
  font-weight: 500;
  line-height: 1.9;
  width: 100%;
  /* & > * {
    border-bottom-color: rgba(116, 223, 112, 0.9);
    color: #fff;
  } */
  /* ${devices.xsm`
    font-size: 0.5rem;
    line-height: 1;
  `} */
`;

export default StyledOrderedList;
