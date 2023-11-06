import styled from "styled-components";
import { ButtonElement } from "./Button.sty";

export const ButtonBrand = styled(ButtonElement)`
  background: linear-gradient(90deg, #790C79 0%, #D30045 100%);
  color: ${({ theme }) => theme.color.s90};
  opacity: .95;
  &:hover {
    opacity: 1;
  }
`