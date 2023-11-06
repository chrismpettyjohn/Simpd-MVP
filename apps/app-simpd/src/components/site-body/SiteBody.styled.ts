import { createGlobalStyle } from "styled-components";

export const SiteBodyElement = createGlobalStyle`

   html, #root {
      width: 100%;
      height: 100%;
      display: table;
   }

   body {
      width: 100%;
      background: ${({ theme }) => theme.color.s10};
      color: ${({ theme }) => theme.color.s60};
      display: table-cell;
      font-family: ${({ theme }) => theme.fontFamily.primary};
   }

   html, body, #root {
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