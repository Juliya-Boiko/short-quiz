import { HeroText } from "./Hero.styled";
import { Title } from "components/common/Title.styled";
import { PrimaryBtn } from "components/common/PrimaryBtn";
import { FadeIn } from 'animate-css-styled-components';

export const Hero = ({ onStart }) => {
  return (
    <>
      <FadeIn duration="0.8s" delay="0.5s">
        <HeroText>
          Запрошуємо пройти тест
        </HeroText>
      </FadeIn>
      <FadeIn duration="0.8s" delay="1s">
        <Title>
          Географія світу. Цікаві факти
        </Title>
      </FadeIn>
      <FadeIn duration="0.8s" delay="1.5s">
        <HeroText>
          Спробуйте дати правильні відповіді на всі питання та перевірте, як добре ви знаєте цю тему. Загальний результат зможете дізнатись після проходження тесту. Успіхів!
        </HeroText>
      </FadeIn>
      <FadeIn duration="0.8s" delay="2s">
        <PrimaryBtn type="button" onClick={onStart}>Почати</PrimaryBtn>
      </FadeIn>
    </>
  );
};