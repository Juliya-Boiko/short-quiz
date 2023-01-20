import { getLength } from "helpers/getLength";
import { HeaderText } from "./Header.styled";

export const Header = ({ number }) => {
  return (
    <>
      <HeaderText>Географія світу. Цікаві факти</HeaderText>
      <HeaderText>Питання {number} з {getLength()}</HeaderText>
    </>
  );
};