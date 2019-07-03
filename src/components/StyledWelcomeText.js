import styled, { keyframes } from "styled-components";

const jump = keyframes`
    0%{
      transform: translateY(0px);
  }
  10%{
      transform: translateY(-30px);
  }
  15%{
      transform: translateY(0px);
  }
  25%{
      transform: translateY(-20px);
      color: rgba(116, 223, 112, 0.9);
  }
  30%{
      transform: translateY(0px);
  }
  40%{
      transform: translateY(-10px);
  }
  45%{
      transform: translateY(0px);
  }
  100%{
      transform: translateY(0px);
  }
`;

const StyledWelcomeText = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    position: relative;
    display: inline-block;
    animation: ${jump} 1.5s linear infinite;
  }

  & span:nth-child(1) {
    animation-delay: 0s;
  }
  & span:nth-child(2) {
    animation-delay: 0.2s;
  }
  & span:nth-child(3) {
    animation-delay: 0.4s;
  }
  & span:nth-child(4) {
    animation-delay: 0.5s;
  }
  & span:nth-child(5) {
    animation-delay: 0.6s;
  }
  & span:nth-child(6) {
    animation-delay: 0.8s;
  }
  & span:nth-child(7) {
    animation-delay: 1s;
  }
  & span:nth-child(8) {
    animation-delay: 1.2s;
  }
`;

export default StyledWelcomeText;
