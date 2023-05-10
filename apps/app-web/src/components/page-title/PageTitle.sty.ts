import { styled } from "styled-components";

export const PageTitleContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--dl-color-simpd-s90);
    font-size: 1.83rem;
    align-self: center;
    font-family: Maven Pro;
  }

  input {
    color: var(--dl-color-simpd-s90);
    width: 45%;
    padding: var(--dl-space-space-unit);
    font-size: 1rem;
    transition: 0.3s;
    border-color: var(--dl-color-simpd-s50);
    background-color: var(--dl-color-simpd-s30);

    &:focus, &:active, &:hover {
      color: var(--dl-color-simpd-s90);
      border-color: var(--dl-color-simpd-brand);
      outline-width: 0;
    }
  }
`