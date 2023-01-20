import { getResult } from "helpers/getResult";
import { Title } from "components/common/Title.styled";
import { SecondaryBtn } from "components/common/SecondaryBtn.styled";
import { FadeIn } from 'animate-css-styled-components';

export const Results = ({ data, onReset }) => {
  const { total } = data;

  return (
    <>
      <FadeIn duration="0.8s" delay="0.5s">
        <Title>
          {getResult(total)}
        </Title>
      </FadeIn>
      <FadeIn duration="0.8s" delay="1.5s">
        <SecondaryBtn type="button" onClick={onReset}>
          Почати знову
        </SecondaryBtn>
      </FadeIn>
    </>
  );
};