import { CustomLabel, HiddenInput, CustomRadio } from "./LabelInput.styled";

export const LabelInput = ({ value, color }) => {

  return (
    <CustomLabel htmlFor={value} info={color} >
      <HiddenInput type="radio" name="answer" id={value} value={value} />
      <CustomRadio></CustomRadio>
      {value}
    </CustomLabel>
  );
};

// style={{ color: color }}