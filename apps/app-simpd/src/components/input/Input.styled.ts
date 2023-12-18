import styled from "styled-components";

export const InputElement = styled.input`
  border: 1px solid #F6DEDE;
  background: transparent;
  border-radius: ${({ theme }) => theme.radius.twoUnits};
  color: ${({ theme }) => theme.color.s60};
  display: flex;
  flex: 1;
  font-weight: italic;
  padding: ${({ theme }) => theme.space.oneUnit};
  width: 100%;

  &::placeholder {
  }
`