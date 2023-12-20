import styled from "styled-components";



export const BookmarkCollectionViewContentHeaderInformation = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.color.s90};
  display: flex;
  gap: ${({ theme }) => theme.space.twoUnits};
  justify-items: space-between;
  flex: 1;
  h5 {
    color: ${({ theme }) => theme.color.s50};
  }
`