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
   padding: 40px;
	height: 100vh;
  /* height: 100vh;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center; 
  background-size: 400% 400%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: ${bg_gradient} 15s ease infinite; */
`;