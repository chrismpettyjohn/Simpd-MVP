import { styled } from "styled-components";

export const FooterElement = styled.footer`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  color: ${({ theme }) => theme.color.brand};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  justify-content: space-between;
`