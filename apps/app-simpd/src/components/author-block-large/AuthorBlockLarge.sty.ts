import { styled } from "styled-components";

export const AuthorBlockLargeElement = styled.div`
  flex: 0 0 auto;
  height: auto;
  display: flex;
  
  img {
    cursor: pointer;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.round};

      &:hover {
        border: ${({ theme }) => `2px solid ${theme.color.brand}`};
      }
  }
`

export const AuthorBlockUserInfoContainer = styled.div`
    align-items: center;
    margin-left: ${({ theme }) => theme.space.oneUnit};
    color: ${({ theme }) => theme.color.s90};

    h1 {
      cursor: pointer;
      color: ${({ theme }) => theme.color.s90};
      font-size: 1.25rem;
      margin-bottom: 0px;

      &:hover {
        color: ${({ theme }) => theme.color.brand};
      }
    }

    span {
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        color: ${({ theme }) => theme.color.brand};
      }
    }
`