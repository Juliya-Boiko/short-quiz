import styled from "styled-components";

export const PrimaryBtn = styled.button`
  width: 200px;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  background: transparent;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  border: 2px solid white;
  border-radius: 0.5rem;
  transition: all 150ms ease;
  color: #fff;
  &:hover {
    font-size: 0.975rem;
    transform: scale(1.05);
    cursor: pointer;
  }

  &:disabled {
    color: grey;
    border: 2px solid grey;
  }
`;