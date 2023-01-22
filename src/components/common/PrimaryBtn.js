import styled from "styled-components";
import { motion } from "framer-motion";

export const PrimaryBtn = styled(motion.button)`
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


  &:disabled {
    color: grey;
    border: 2px solid grey;
  }
`;