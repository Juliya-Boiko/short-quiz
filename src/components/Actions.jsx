import { PrimaryBtn } from "./common/PrimaryBtn";
import { SecondaryBtn } from "./common/SecondaryBtn.styled";

export const Actions = ({ data, onNext }) => {
  const { statusNext, userChoise } = data;

  return (
    <div>
      {!statusNext
        ? <PrimaryBtn
          type="submit"
          disabled={userChoise === ''}
        >
            Перевірити
          </PrimaryBtn>
        : null}
      {statusNext
        ? <SecondaryBtn type="button" onClick={onNext}>
              Далі
          </SecondaryBtn>
        : null}
    </div>
  );
};