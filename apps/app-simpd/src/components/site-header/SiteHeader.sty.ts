import { styled } from "styled-components";

export const SiteHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background: black;
`

export const SiteHeaderContent = styled.div`
  display: flex;
  justify-items: center;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.twoUnits};
`