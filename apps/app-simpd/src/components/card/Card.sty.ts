import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `1px solid ${theme.color.s50}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  padding: ${({ theme }) => theme.space.oneUnit};
`

export const CardBody = styled.div`
  width: 100%;
  overflow: hidden;
`
