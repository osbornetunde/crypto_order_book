import styled from "styled-components";
import { devices } from "../utils/styledUtils";
const StyledOrderedList = styled.ol`
display: flex;
flex-direction: column;
  font-size: 0.9rem;
  color: #000639;
  font-weight: 500;
  line-height: 1.3;
  width: 100%;
 
  /* ${devices.xsm`
    font-size: 0.5rem;
    line-height: 1;
  `} */
`;

export default StyledOrderedList;
