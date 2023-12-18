import { styled } from "styled-components";

export const ButtonElement = styled.button`
  color: ${({ theme }) => theme.color.s90};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
  font-style: normal;
  text-transform: lowercase;
  font-weight: 500;
  line-height: 1.66rem;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.radius.twoUnits};
  background-color: ${({ theme }) => theme.color.s50};
  height: fit-content;
  width: fit-content;
  padding-top: ${({ theme }) => theme.space.halfUnit};
  padding-bottom: ${({ theme }) => theme.space.halfUnit};
  padding-left: ${({ theme }) => theme.space.twoUnits};
  padding-right:${({ theme }) => theme.space.twoUnits};

  &:hover {
    border-color: ${({ theme }) => theme.color.s90};
    background-color: ${({ theme }) => theme.color.s40};
  }
`