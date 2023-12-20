import styled from "styled-components";

export const SEND_MESSAGE_CONTAINER_HEIGHT = '10%';

export const SendMessageContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.space.halfUnit};
  justify-content: center;
  height: ${SEND_MESSAGE_CONTAINER_HEIGHT}%;
  width: 100%;
  overflow: hidden;
  input {
    background: linear-gradient(178deg, rgba(203, 188, 188, 0.4) 0.2%, rgba(189, 171, 171, 0.1) 99.37%);
    border-color: transparent;
    border-radius: ${({ theme }) => theme.radius.twoUnits};
    color: ${({ theme }) => theme.color.s90};
    height: 100%;
    width: 100%;
    padding: ${({ theme }) => theme.space.halfUnit};
    &:focus {
      outline: none;
    }
  }
  `