import { styled } from "styled-components";

export const NotificationCardElement = styled.div`
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: ${({ theme }) => theme.space.oneUnit};
  position: relative;
  box-shadow: 5px 5px 10px 10px #1c1c1e;
  transition: 0.3s;
  align-items: center;
  border-color: ${({ theme }) => theme.color.s40};
  border-style: solid;
  border-width: 1px;
  border-radius:${({ theme }) => theme.radius.eight};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.s20};
  margin-bottom: ${({ theme }) => theme.space.twoUnits};

  &:hover {
   box-shadow: 5px 5px 10px 10px #711b1e;
   border-color: ${({ theme }) => theme.color.brand};
  }
`

export const NotificationCardAuthorElement = styled.div`
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-color: ${({ theme }) => theme.color.s30};
    border-width: 2px;
    border-radius: var(--dl-radius-radius-round);
  }
}
`

export const NotificationCardAuthorInfoContainer = styled.div`
  flex: 0 0 auto;
  width: auto;
  height: auto;
  align-items: center;
  margin-left: ${({ theme }) => theme.space.twoUnits};
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  h1 {
    color: ${({ theme }) => theme.color.s90};
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    margin-bottom: 0px;
  }

  span {
    color: ${({ theme }) => theme.color.s50};
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
  }

}
`

export const NotificationCardTextContainer = styled.div`
  flex: 0 0 auto;
  width: 60%;
  height: auto;
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.s90};

  h1 {
    font-size:  ${({ theme }) => theme.fontSize.oneUnit};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.color.s90};
    margin-bottom: 0px;
  }

  .message-content {
    font-size:  ${({ theme }) => theme.fontSize.halfUnit};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.color.s90};
  }
`

export const NotificationCardIconElement = styled.svg`
  fill: ${({ theme }) => theme.color.s90};
  width: ${({ theme }) => theme.icon.twoUnits};
  cursor: pointer;
  height: ${({ theme }) => theme.icon.twoUnits};
  transition: 0.3s;
  
  &:hover {
    fill: ${({ theme }) => theme.color.brand};
  }
}
`