import { getCurrent } from "./getCurrent";

export const getCorrect = (number) => {
  const currentQ = getCurrent(number);
  const rightQ = currentQ.find(elem => elem.status === true);
  return rightQ.answer
};