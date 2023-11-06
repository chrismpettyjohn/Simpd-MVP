import { createGlobalStyle } from "styled-components";

export const SiteBodyElement = createGlobalStyle`
   body, html, #root {
      background: ${({ theme }) => theme.color.s10};
      color: ${({ theme }) => theme.color.s60};
      font-family: ${({ theme }) => theme.fontFamily.primary};
      min-height: 100%;
      min-hwidth: 100%;
      margin: 0;
      padding: 0;
   }

   a {
      color: ${({ theme }) => theme.color.s60};
      cursor: pointer;
      text-decoration: none;
      &:hover {
      text-decoration: underline;
      }
   }
 `