import { styled } from "styled-components";

export const PostCardElement = styled.div`
  width: 100%;
  cursor: pointer;
  height: 100%;
  display: flex;
  position: relative;
  max-height: 800px;
  transition: 0.3s;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.twoUnits};
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.s10};
  padding: ${({ theme }) => theme.space.halfUnit};
  

  &:hover {
    box-shadow: 5px 5px 10px 10px #711b1e;
  }
`

export const PostCardHeader = styled.div`
    color: ${({ theme }) => theme.color.s90};
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.space.oneUnit};
`

export const PostCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
  overflow: hidden;
`

export const PostCardImage = styled.img`
    width: 100%;
    max-height: ${({ theme }) => `${Number(theme.maxWidth / 1.77)}px`};
    max-width: ${({ theme }) => theme.maxWidth};
`


export const PostCardText = styled.div`
    color: ${({ theme }) => theme.color.s90};
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
    padding-left: ${({ theme }) => theme.space.halfUnit};
    padding-right: ${({ theme }) => theme.space.halfUnit};
    white-space: pre-line;
`

export const PostStatsContainer = styled.div`
  background: ${({ theme }) => theme.color.s40};
  border-radius: ${({ theme }) => theme.radius.twoUnits};
  cursor: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.space.oneUnit};
`

export const PostStatElement = styled.div`
  padding: ${({ theme }) => theme.space.oneUnit};
  color: ${({ theme }) => theme.color.s90};
  cursor: pointer;
  text-align: center;

  h4 {
    color: ${({ theme }) => theme.color.s50};
    font-size: ${({ theme }) => theme.fontSize.halfUnit};
    margin: ${({ theme }) => theme.space.halfUnit};
  }
  p {
    font-size: ${({ theme }) => theme.icon.halfUnit};
    margin-top:${({ theme }) => `-${theme.space.halfUnit}`};
  }
  
  &:hover {
    i, h4, small {
      color: ${({ theme }) => theme.color.brand};
    }
  }

  small {
    color: ${({ theme }) => theme.color.s50};
    font-style: italic;
  }
`