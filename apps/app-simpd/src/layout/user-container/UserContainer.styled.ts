import styled from "styled-components";

export const UserContainerElement = styled.div`
  background: black;
  display: flex;
  flex: 1;
  height: 100%;
  overflow-y: auto;
`

export const UserContainerInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  margin: 0 auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.maxWidth};
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.laptop}) {
      flex-direction: row;
    }
  `}
`

export const UserContainerPageContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidth}
`

export const UserContainerPageInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.twoUnits};
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};
  width: ${({ theme }) => `calc(100% - ${theme.space.threeUnits} - ${theme.space.threeUnits})`};
  height: 100%;
`