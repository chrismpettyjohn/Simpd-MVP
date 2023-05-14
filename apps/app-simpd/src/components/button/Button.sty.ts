import { styled } from "styled-components";

export const ButtonElement = styled.button`
  color: var(--dl-color-simpd-s90);
  cursor: pointer;
  font-size: 1.41rem;
  font-style: normal;
  transition: 0.3s;
  font-weight: 500;
  line-height: 1.66rem;
  border-color: var(--dl-color-simpd-s50);
  background-color: var(--dl-color-simpd-s40);
  height: fit-content;
  width: fit-content;
  padding: ${({ theme }) => theme.space.oneUnit};

  &:hover {
    border-color: var(--dl-color-simpd-s90);
    background-color: var(--dl-color-simpd-s40);
  }
`