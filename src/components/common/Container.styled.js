import styled, { keyframes } from "styled-components";

export const bg_gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${bg_gradient} 15s ease infinite;
  padding: 10px;
	height: 100vh;
  @media screen and (min-width: 425px) {
    padding: 40px;
  }
`;