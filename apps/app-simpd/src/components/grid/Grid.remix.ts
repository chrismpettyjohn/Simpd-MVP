import styled from "styled-components";
import { GridElement } from "./Grid.sty";

export const GridLarge = styled(GridElement)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.laptop}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`
export const GridLargeSmall = styled(GridElement)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.laptop}) {
      grid-template-columns: 2fr 1fr;
    }
  `}
`

export const GridSmallLarge = styled(GridElement)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.laptop}) {
      grid-template-columns: 1fr 2fr;
    }
  `}
`
export const GridMedium = styled(GridElement)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.laptop}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `}
`