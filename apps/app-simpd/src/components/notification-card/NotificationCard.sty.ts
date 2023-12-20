import { styled } from "styled-components";

export const NotificationCardElement = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
`

export const NotificationCardAuthor = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100%;
}
`

export const NotificationCardContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  h3 {
    color: #F6DEDE;
  }
}
`

export const NotificationCardActionContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-direction: column;
  small {
    color: ${({ theme }) => theme.color.s50};
  }
`

export const NotificationCardNewBadge = styled.div`
  align-items: center;
  background: linear-gradient(90deg, #CC0048 0%, #DF6500 100%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  width: 60px;
  font-size: ${({ theme }) => theme.fontSize.halfUnit};
  margin-bottom: ${({ theme }) => theme.space.halfUnit};
  overflow: hidden;
`