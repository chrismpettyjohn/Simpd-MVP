import styled from "styled-components";

export const TextareaElement = styled.textarea`
  border: 1px solid #F6DEDE;
  background: transparent;
  border-radius: ${({ theme }) => theme.radius.twoUnits};
  color: ${({ theme }) => theme.color.s40};
  display: flex;
  font-weight: italic;
  padding: ${({ theme }) => theme.space.halfUnit};
  width: 100%;

  &::placeholder {
    outline: none;
  }
`