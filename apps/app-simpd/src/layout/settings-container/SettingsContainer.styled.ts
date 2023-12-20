import styled from "styled-components";

export const SettingsContainerElement = styled.div`
  background: linear-gradient(180deg, #000000 0%, #70023E 100%);
  display: flex;
  flex: 1;
  height: 100%;
  overflow-y: auto;
`

export const SettingsContainerInnerContent = styled.div`
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

export const SettingsContainerPageContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidth}
`

export const SettingsContainerPageInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.twoUnits};
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};
  width: ${({ theme }) => `calc(100% - ${theme.space.threeUnits} - ${theme.space.threeUnits})`};
  height: 100%;
`