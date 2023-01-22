import { getResult } from "helpers/getResult";
import { Title } from "components/common/Title.styled";
import { SecondaryBtn } from "components/common/SecondaryBtn.styled";
import { Box } from "components/common/Box.styled";

export const Results = ({ data, onReset }) => {
  const { total } = data;

  return (
    <>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
        <Title>
          {getResult(total)}
        </Title>
      </Box>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1}}
      >
        <SecondaryBtn type="button" onClick={onReset}>
          Почати знову
        </SecondaryBtn>
      </Box>
    </>
  );
};