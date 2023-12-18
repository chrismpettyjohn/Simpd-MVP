import { styled } from "styled-components";

export const SiteHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  background: black;
`

export const SiteHeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-items: space-between;
  flex: 1;
  padding-top: ${({ theme }) => theme.space.twoUnits};
  padding-bottom: ${({ theme }) => theme.space.twoUnits};
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};
`

export const SiteHeaderAvatar = styled.img`
  border-radius: 100%;
  border: ${({ theme }) => `2px solid ${theme.color.s50}`};
  cursor: pointer;
  height: 80px;
  width: 80px;
  &:hover {
    border-color: ${({ theme }) => theme.color.s60};
  }
`