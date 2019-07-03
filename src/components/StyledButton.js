import styled from "styled-components";

const StyledButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: ${props =>
    props.isStop ? props.theme.redBg : "rgba(116, 223, 112, 0.9)"};
  color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  outline: 0;
  margin: 0 0.5rem;
  box-shadow: 1px 2px 2px 2px #ccc;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${props =>
      props.isStopHover ? props.theme.redBgHover : "rgba(116, 223, 112, 0.3)"};
    box-shadow: 0px 1px 1px 1px #ccc;
  }

  &:focus {
    background-color: ${props =>
      props.isStopFocus ? props.theme.redBgFocus : "#000639"};
    box-shadow: 0px 1px 1px 1px #ccc;
  }
`;

export default StyledButton;
