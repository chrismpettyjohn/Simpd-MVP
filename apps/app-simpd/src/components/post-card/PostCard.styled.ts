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
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  margin-top: ${({ theme }) => theme.space.twoUnits};
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.s10};

  &:hover {
    box-shadow: 5px 5px 10px 10px #711b1e;
  }
`

export const PostCardHeader = styled.div`
    color: ${({ theme }) => theme.color.s90};
    display: flex;
    width: 100%;
`

export const PostCardContent = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space.twoUnits};
  overflow: hidden;
`

export const PostCardImage = styled.img`
    width: auto;
    max-width: 100%;
    height: 400px;
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
  margin-top: ${({ theme }) => theme.space.twoUnits};
  width: 100%;
`

export const PostStatElement = styled.div`
  padding: ${({ theme }) => theme.space.halfUnit};
  color: ${({ theme }) => theme.color.s90};
  cursor: pointer;
  text-align: center;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
  }
  p {
    font-size: ${({ theme }) => theme.icon.halfUnit};
    margin-top:${({ theme }) => `-${theme.space.oneUnit}`};
  }
  
  &:hover {
    p, h3 {
      color: ${({ theme }) => theme.color.brand};
    }
  }
`