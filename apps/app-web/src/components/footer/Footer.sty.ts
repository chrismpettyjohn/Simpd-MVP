import { styled } from "styled-components";

export const FooterElement = styled.footer`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.twoUnits};
  padding-left: ${({ theme }) => theme.space.threeUnits};
  padding-right: ${({ theme }) => theme.space.threeUnits};
  padding-bottom: ${({ theme }) => theme.space.twoUnits};
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.brand};
  font-size: 1.5rem;
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 700;
`