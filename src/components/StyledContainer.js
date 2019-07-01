import styled from "styled-components";

const StyledContainer = styled.main`
  background: ${props => props.theme.mainBg};
  min-height: 100vh;
  display: flex;
`;

export default StyledContainer;
