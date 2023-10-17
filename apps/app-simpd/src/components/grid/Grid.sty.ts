import styled from "styled-components";

export const GridElement = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.oneUnit};
  grid-template-columns: 1fr;
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `}
`