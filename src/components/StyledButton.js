import styled from "styled-components";

const StyledButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: rgba(116, 223, 112, 0.9);
  color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  outline: 0;
  margin: 0 0.5rem;

  &:hover {
    background-color: rgba(116, 223, 112, 0.3);
  }

  &:focus {
    background-color: #000639;
  }
`;

export default StyledButton;
