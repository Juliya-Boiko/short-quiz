import { questions } from "questions/questions";
import { Actions } from "../Actions";
import { LabelInput } from "../LabelInput/LabelInput";
import { Title } from "components/common/Title.styled";
import { CardForm } from "./Card.styled";

export const Card = ({ data, onChange, onSubmit, onNext }) => {
  const { number, correct, userChoise, statusNext } = data;
  const { question, answers } = questions[number - 1];

  const colorPicker = (value) => {
    if (value === correct && value === userChoise && statusNext) {
      return 'rgba(0, 221, 0, 0.43)';
    } else {
      if (value === userChoise && value !== correct && statusNext) {
        return 'rgba(255, 0, 0, 0.43)';
      }
      if (value === correct && value !== userChoise && statusNext) {
        return 'rgba(0, 221, 0, 0.43)';
      }
    }
  };

  return (
    <CardForm onChange={onChange} onSubmit={onSubmit}>
     
        <Title>{question}</Title>
        {answers.map(({ id, answer }) =>
          <LabelInput key={id} value={answer} color={colorPicker(answer)} />
        )}

      <Actions data={data} onNext={onNext} />
    </CardForm>
  );
};