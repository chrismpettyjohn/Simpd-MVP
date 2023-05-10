import { styled } from "styled-components";

export const PageTitleContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: ${({ theme }) => theme.space.twoUnits};
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.color.s90};
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    align-self: center;
  }

  input {
    color: ${({ theme }) => theme.color.s90};
    width: 45%;
    padding: var(--dl-space-space-unit);
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    transition: 0.3s;
    border-color: ${({ theme }) => theme.color.s50};
    background-color: ${({ theme }) => theme.color.s30};

    &:focus, &:active, &:hover {
      color: ${({ theme }) => theme.color.s90};
      border-color: ${({ theme }) => theme.color.brand};
      outline-width: 0;
    }

  }
`