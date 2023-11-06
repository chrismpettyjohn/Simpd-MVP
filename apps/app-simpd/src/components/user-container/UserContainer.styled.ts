import styled from "styled-components";

export const UserContainerElement = styled.div`
  background: black;
  display: flex;
  flex: 1;
  height: 100%;
`

export const UserContainerInnerContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.oneUnit};
  margin: 0 auto;
  width: 1728px;
`

export const UserContainerPageContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const UserContainerPageInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};
  width: ${({ theme }) => `calc(100% - ${theme.space.threeUnits} - ${theme.space.threeUnits})`};
`