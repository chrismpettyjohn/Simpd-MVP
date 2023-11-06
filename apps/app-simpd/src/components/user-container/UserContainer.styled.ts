import styled from "styled-components";
import { Container } from "../container/Container";

export const UserContainerElement = styled.div`
  background: black;
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
  height: 100%;
`

export const UserContainerPageContent = styled.div`
  display: flex;
  flex: 1;
`

export const UserContainerPageInnerContent = styled(Container)`
  flex-direction: column;
`