import { styled } from "styled-components";

export const BookmarkCollectionLink = styled.a<{ active: boolean }>`
  color: ${({ active, theme }) => active ? theme.color.brand : theme.color.s90};
  font-size: ${({ theme }) => theme.fontSize.twoUnits};
  font-style: normal;
  font-weight: ${({ active }) => active ? 800 : 500};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.brand};
  }
`