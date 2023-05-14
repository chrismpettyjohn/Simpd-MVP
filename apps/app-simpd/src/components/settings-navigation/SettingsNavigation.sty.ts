import { styled } from "styled-components";

export const SettingsNavIcon = styled.i`
  font-size: ${({ theme }) => theme.icon.threeUnits};
  color: ${({ theme }) => theme.color.s90};

  &:hover, &:active, &:focus {
    color: ${({ theme }) => theme.color.brand};
  }
`