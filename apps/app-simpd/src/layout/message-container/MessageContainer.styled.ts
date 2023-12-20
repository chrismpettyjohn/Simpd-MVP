import styled from "styled-components";

export const MessageHeaderElement = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  background: black;
`

export const MessageHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-items: space-between;
  flex: 1;
  padding-top: ${({ theme }) => theme.space.twoUnits};
  padding-bottom: ${({ theme }) => theme.space.twoUnits};
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};
`

export const MessageHeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-items: space-between;
  flex: 1;
`


export const MessageHeaderContactInformation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  flex: 1;
`

export const MessageHeaderContactActivityStatus = styled.div`
  color: ${({ theme }) => theme.color.s50};
`