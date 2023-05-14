import { styled } from "styled-components";

export const SwitchButtonContainer = styled.div`
  color: ${({ theme }) => theme.color.s90};
  display: flex;
  align-content: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.oneUnit};

  h3 {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`