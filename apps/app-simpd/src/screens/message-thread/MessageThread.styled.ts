import { SEND_MESSAGE_CONTAINER_HEIGHT } from "components/send-message-card/SendMessageCard.styled";
import styled from "styled-components";

export const MessageThreadContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - ${SEND_MESSAGE_CONTAINER_HEIGHT});
  width: 100%;
`