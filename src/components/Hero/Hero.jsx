import { HeroText } from "./Hero.styled";
import { Title } from "components/common/Title.styled";
import { PrimaryBtn } from "components/common/PrimaryBtn";

export const Hero = ({ onStart }) => {
  return (
    <>
        <HeroText>
          Запрошуємо пройти тест
        </HeroText>
        <Title>
          Географія світу. Цікаві факти
        </Title>
        <HeroText>
          Спробуйте дати правильні відповіді на всі питання та перевірте, як добре ви знаєте цю тему. Загальний результат зможете дізнатись після проходження тесту. Успіхів!
        </HeroText>
        <PrimaryBtn type="button" onClick={onStart}>Почати</PrimaryBtn>
    </>
  );
};