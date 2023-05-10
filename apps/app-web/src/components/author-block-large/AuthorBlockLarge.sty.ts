import { styled } from "styled-components";

export const AuthorBlockLargeElement = styled.div`
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  height: auto;
  display: flex;
  padding: ${({ theme }) => theme.space.halfUnit};
  margin-top: var(--dl-space-space-twounits);
  transition: 0.3s;
  align-items: center;
  border-color: var(--dl-color-simpd-s50);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  justify-content: flex-start;
  background-color: var(--dl-color-simpd-s40);

  &:hover {
    border-color: var(--dl-color-simpd-brand);
    background-color: var(--dl-color-simpd-s40);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-color: var(--dl-color-simpd-s30);
    border-width: 2px;
    border-radius: var(--dl-radius-radius-round);
  }
`

export const AuthorBlockUserInfoContainer = styled.div`
    flex: 0 0 auto;
    width: auto;
    height: auto;
    align-items: center;
    margin-left: var(--dl-space-space-twounits);
    justify-content: flex-start;
    color: var(--dl-color-simpd-s90);

    h1 {
      color: var(--dl-color-simpd-s90);
      font-size: 1.25rem;
      font-family: Maven Pro;
      margin-bottom: 0px;
    }

    span {
      font-size: 1rem;
      font-family: Maven Pro;
    }
`