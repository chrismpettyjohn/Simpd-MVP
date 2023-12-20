import styled from "styled-components";

export const BookmarkCollectionPreviewElement = styled.div`
  border-left: 2px solid transparent;
  cursor: pointer;
  height: fit-content;
  padding-left: 4px;

  img {
    height: 300px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.brand};
  }
`