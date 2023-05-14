import { styled } from "styled-components";

export const SwitchButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.oneUnit};
`