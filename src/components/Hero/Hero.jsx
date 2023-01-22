import { HeroText } from "./Hero.styled";
import { Title } from "components/common/Title.styled";
import { PrimaryBtn } from "components/common/PrimaryBtn";
import { Box } from "components/common/Box.styled";

export const Hero = ({ onStart }) => {
  return (
    <>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
        <HeroText>
          Запрошуємо пройти тест
        </HeroText>
      </Box>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1}}
      >
        <Title>
          Географія світу. Цікаві факти
        </Title>
      </Box>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2}}
      >
        <HeroText>
          Спробуйте дати правильні відповіді на всі питання та перевірте, як добре ви знаєте цю тему. Загальний результат зможете дізнатись після проходження тесту. Успіхів!
        </HeroText>
      </Box>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3}}
      >
        <PrimaryBtn type="button" onClick={onStart}>Почати</PrimaryBtn>
      </Box>
    </>
  );
};