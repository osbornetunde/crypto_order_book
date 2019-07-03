import styled from "styled-components";
import { devices } from "../utils/styledUtils";

const StyledOrderValue = styled.section`
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: ${props => (props.isAligned ? "center" : "none")};
  overflow-y: auto;
  flex: 1 1 0;
  scroll-behavior: smooth;
  width: 100%;
  max-height: 100%;
  height: calc(100vh - 15rem);
  padding: 0.5rem 2rem;
  box-shadow: 1px 1px 2px 2px rgba(116, 223, 112, 0.9) inset;

  /* ${devices.md`
    flex-direction: column;
    align-items: center
  `} */
`;

export default StyledOrderValue;
