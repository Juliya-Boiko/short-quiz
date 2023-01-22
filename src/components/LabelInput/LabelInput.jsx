import { CustomLabel, HiddenInput, CustomRadio } from "./LabelInput.styled";

export const LabelInput = ({ value, color }) => {

  return (
    <CustomLabel htmlFor={value} info={color} whileHover={{ scale: 1.1 }}>
      <HiddenInput type="radio" name="answer" id={value} value={value} />
      <CustomRadio></CustomRadio>
      {value}
    </CustomLabel>
  );
};

// style={{ color: color }}