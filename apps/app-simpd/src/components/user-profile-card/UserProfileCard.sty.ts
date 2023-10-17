import { styled } from "styled-components";

export const UserProfileCardContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  box-shadow: 5px 5px 10px 10px #1c1c1e;
  align-items: stretch;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.s20};
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;

  h1 {
    color:  ${({ theme }) => theme.color.s90};
    font-size:  ${({ theme }) => theme.fontSize.twoUnits};
    margin-top: ${({ theme }) => theme.space.halfUnit};
    
    margin-bottom: 0px;
  }

  span {
    color:  ${({ theme }) => theme.color.s50};
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
  }
`

export const UserProfileCardContent = styled.div`
  padding: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`

export const UserProfileCardCoverPhoto = styled.div <{ backgroundUrl: string }>`
  flex: 0 0 auto;
  width: 100%;
  height: 200px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  background-size: cover;
  justify-content: center;
  background-image: ${({ backgroundUrl }) => `linear-gradient(315deg, rgb(189, 195, 199) 0.00%, rgba(0, 0, 0, 0.2) 1.00%, rgb(0, 0, 0) 100.00%), url('${backgroundUrl}')`};
`

export const UserProfileCardInfoContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

export const UserProfileCardAvatar = styled.div <{ backgroundUrl: string }>`
  flex: 0 0 auto;
  width: 100px;
  cursor: pointer;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  margin-top: -25px;
  align-items: center;
  justify-content: center;
  border-radius: var(--dl-radius-radius-round);
  background-size: cover;
  background-image: ${({ backgroundUrl }) => `url('${backgroundUrl}')`};
`

export const UserProfileCardActionsContainer = styled.div`
  gap: 2.5rem;
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  padding:${({ theme }) => theme.space.twoUnits};

  i {
    color: ${({ theme }) => theme.color.s90};
    font-size: ${({ theme }) => theme.icon.oneUnit};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.color.brand};
    }
  }
`

export const UserProfileChangeMediaIcon = styled.i`
  cursor: pointer;
  color: ${({ theme }) => theme.color.s90};
  font-size: ${({ theme }) => theme.icon.threeUnits};
  &:hover {
    color: ${({ theme }) => theme.color.brand};
  }
`