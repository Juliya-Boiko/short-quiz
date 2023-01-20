import { getLength } from "./getLength";

export const getResult = (total) => {
  const result = total === 0 ? "Нажаль ви не маєте вірних відповідей" : `Вітаємо! Кількість вірних відповідей: ${total} з ${getLength()}`;
  return result;
};