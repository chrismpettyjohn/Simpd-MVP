import { styled } from "styled-components";

export const SettingsNavigationElement = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s20};
  box-shadow: 5px 5px 10px 10px #1c1c1e;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.oneUnit};
`

export const SettingsNavIcon = styled.i`
  font-size: ${({ theme }) => theme.icon.threeUnits};
  color: ${({ theme }) => theme.color.s90};

  &:hover, &:active, &:focus {
    color: ${({ theme }) => theme.color.brand};
  }
`