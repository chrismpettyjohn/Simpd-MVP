import { styled } from "styled-components";

export const ButtonElement = styled.button`
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: var(--dl-color-simpd-s90);
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
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