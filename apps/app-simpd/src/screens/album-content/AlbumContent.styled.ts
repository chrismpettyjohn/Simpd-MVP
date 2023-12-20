import styled from "styled-components";

export const AlbumContentHeaderElement = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  background: black;
`

export const AlbumContentHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-items: space-between;
  flex: 1;
  padding-top: ${({ theme }) => theme.space.twoUnits};
  padding-bottom: ${({ theme }) => theme.space.twoUnits};
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};
`

export const AlbumContentHeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-items: space-between;
  flex: 1;
`

export const AlbumContentHeaderInformation = styled.div`
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