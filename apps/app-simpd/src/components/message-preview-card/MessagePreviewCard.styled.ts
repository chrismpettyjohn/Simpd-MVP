import styled from "styled-components";

export const MessagePreviewCardElement = styled.div`
  align-items: center;
  border-left: 2px solid transparent;
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  padding-left: 4px;
  &:hover {
    border-color: ${({ theme }) => theme.color.brand};
  }
`

export const MessagePreviewAuthorImage = styled.img`
  border-radius: 100%;
  height: 100px;
  width: 100px;
`

export const MessagePreviewCardContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.oneUnit};
`

export const MessagePreviewTimestamp = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`
