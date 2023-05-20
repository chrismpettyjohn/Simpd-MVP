import { styled } from "styled-components";

export const SiteHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.four};
  margin-top: ${({ theme }) => theme.space.twoUnits};
`

export const SiteHeaderBrandContainer = styled.div`
  height: 100%;
  width: 100%;
  align-self: stretch;
  background-color:${({ theme }) => theme.color.brand};
  border-top-left-radius: ${({ theme }) => theme.radius.four};
  border-top-right-radius: ${({ theme }) => theme.radius.four};
  color: ${({ theme }) => theme.color.s90};
  width: auto;
  font-size: ${({ theme }) => theme.fontSize.twoUnits};
  font-style: normal;
  text-align: center;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: lowercase;
`
export const SiteHeaderElement = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #1C1C1E;
  border-bottom-left-radius: ${({ theme }) => theme.radius.four};
  border-bottom-right-radius: ${({ theme }) => theme.radius.four};

`

export const SiteHeaderNavigation = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.space.twoUnits};
  padding-bottom: ${({ theme }) => theme.space.twoUnits};
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};

  svg, i {
    cursor: pointer;
    color: ${({ theme }) => theme.color.s90};
    fill: ${({ theme }) => theme.color.s90};
    font-size: ${({ theme }) => theme.icon.twoUnits};
    width: ${({ theme }) => theme.icon.twoUnits};
    height: ${({ theme }) => theme.icon.twoUnits};
    transition: 0.3s;
    text-decoration: none;

    &:focus, &:hover, &:active {
      fill: ${({ theme }) => theme.color.brand};
      color:${({ theme }) => theme.color.brand};
    }
  }
`

export const SiteHeaderTools = styled.div`
  color: ${({ theme }) => theme.color.s90};
  display: flex;
  gap: ${({ theme }) => theme.space.oneUnit};
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.oneUnit};

  h3 {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const SiteHeaderLink = styled.a`
  color: ${({ theme }) => theme.color.s90};
  text-decoration: none;
  &:hover {
      color: ${({ theme }) => theme.color.brand};
  }
`