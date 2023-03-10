import styled from "styled-components";
import { motion } from "framer-motion";

export const CustomLabel = styled(motion.label)`
  width: 100%;

  padding: 5px 15px 8px 15px;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;
  background-color: ${p => p.info};
  border-radius: 0.5rem;

  &:nth-last-of-type(4n-3) {
    margin: 0 0 2rem 0;
  }

  @media screen and (min-width: 425px) {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HiddenInput = styled.input`
  margin: 0;
  visibility: hidden;

  &:checked + span {
    border: 2px solid #fff;
  }

  &:checked + span:after {
  opacity: 1;
}
`;

export const CustomRadio = styled.span`
  left: -8px;
  top: 1px;
  cursor: pointer;
  width: 17px;
  height: 17px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background: #fff;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
  }
`;