import { questions } from "questions/questions";

export const getCurrent = (number) => {
  const currentQ = questions[number - 1].answers;
  return currentQ;
}; 