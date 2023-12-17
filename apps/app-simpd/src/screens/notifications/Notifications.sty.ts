import { styled } from "styled-components";

export const NotificationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.twoUnits};
  overflow-y: auto;
`