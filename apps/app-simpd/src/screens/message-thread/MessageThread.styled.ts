import { SEND_MESSAGE_CONTAINER_HEIGHT } from "components/send-message-card/SendMessageCard.styled";
import styled from "styled-components";


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

export const MessageThreadContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - ${SEND_MESSAGE_CONTAINER_HEIGHT});
  width: 100%;
`