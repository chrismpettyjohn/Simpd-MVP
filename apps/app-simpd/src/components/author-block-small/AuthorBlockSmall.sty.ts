import { styled } from "styled-components";

export const AuthorBlockSmallElement = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-color: ${({ theme }) => theme.color.s30};
    border-width: 2px;
    border-radius: 100%;
  }
`

export const AuthorBlockSmallInfoContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  align-items: center;
  margin-left: ${({ theme }) => theme.space.twoUnits};
  justify-content: flex-start;

  h1 {
    color: ${({ theme }) => theme.color.s90};
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    margin-bottom: 0px;
  }

  span {
    color: ${({ theme }) => theme.color.s50};
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
  }
`