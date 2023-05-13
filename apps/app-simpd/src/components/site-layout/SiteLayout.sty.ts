import { styled } from "styled-components";

export const SiteLayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`