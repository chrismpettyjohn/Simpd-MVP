import { styled } from "styled-components";

export const FooterElement = styled.footer`
  width: 100%;
  height: 150px;
  display: flex;
  position: fixed;
  background: transparent;
  bottom: 25px;
  left: 0px;
  align-items: center;
  color: ${({ theme }) => theme.color.s60};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  justify-content: space-between;
  a {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`

export const FooterContentElement = styled.div`
  display: flex;
  flex: 1;
  padding: ${({ theme }) => theme.space.threeUnits};
  `