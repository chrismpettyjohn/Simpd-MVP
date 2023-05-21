import { styled } from "styled-components";

export const PostCardElement = styled.div`
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  height: 100%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 10px #1c1c1e;
  max-height: 800px;
  transition: 0.3s;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.four};
  margin-top: ${({ theme }) => theme.space.twoUnits};
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.s30};

  &:hover {
    box-shadow: 5px 5px 10px 10px #711b1e;
  }
`

export const PostCardContent = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space.twoUnits};
`

export const PostCardImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
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
  border-radius: ${({ theme }) => theme.radius.eight};
  cursor: auto;
  display: flex;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.space.twoUnits};
  padding-right: ${({ theme }) => theme.space.twoUnits};
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