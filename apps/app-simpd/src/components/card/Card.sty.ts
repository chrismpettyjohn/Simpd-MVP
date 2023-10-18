import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(178deg, rgba(203, 188, 188, 0.4) 0.2%, rgba(189, 171, 171, 0.1) 99.37%);
  border: 1px solid #F6DEDE
  border-radius: ${({ theme }) => theme.radius.eight};
  position: relative;
`

export const CardHeader = styled.div`
`

export const CardHeaderContent = styled.div`
`

export const CardBody = styled.div`
  width: 100%;
`

export const CardBodyContent = styled.div`
`