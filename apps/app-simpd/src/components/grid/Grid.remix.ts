import { Grid } from "./Grid";
import styled from "styled-components";

export const GridLarge = styled(Grid)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`
export const GridLargeSmall = styled(Grid)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: 2fr 1fr;
    }
  `}
`

export const GridSmallLarge = styled(Grid)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: 1fr 2fr;
    }
  `}
`
export const GridMedium = styled(Grid)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `}
`