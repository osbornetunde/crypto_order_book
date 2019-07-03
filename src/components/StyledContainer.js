import styled from "styled-components";

const StyledContainer = styled.main`
  background: ${props => props.theme.mainBg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

export default StyledContainer;
