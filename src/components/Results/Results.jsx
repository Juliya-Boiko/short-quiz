import { getResult } from "helpers/getResult";
import { Title } from "components/common/Title.styled";
import { SecondaryBtn } from "components/common/SecondaryBtn.styled";


export const Results = ({ data, onReset }) => {
  const { total } = data;

  return (
    <>
        <Title>
          {getResult(total)}
        </Title>
        <SecondaryBtn type="button" onClick={onReset}>
          Почати знову
        </SecondaryBtn>
    </>
  );
};