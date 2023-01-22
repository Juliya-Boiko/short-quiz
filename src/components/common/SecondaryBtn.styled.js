import styled from "styled-components";
import { motion } from "framer-motion";

export const SecondaryBtn = styled(motion.button)`
  width: 200px;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  background: #fff;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  transition: all 150ms ease;
  color: #e73c7e;
  &:hover {
    font-size: 0.975rem;
    transform: scale(1.05);
    cursor: pointer;
  }
`;