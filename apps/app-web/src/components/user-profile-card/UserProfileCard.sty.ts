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
  border-radius:  ${({ theme }) => theme.radius.four};
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
    font-family: Maven Pro;
    margin-bottom: 0px;
  }

  span {
    color:  ${({ theme }) => theme.color.s50};
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
    font-family: Maven Pro;
  }
`

export const UserProfileCardContent = styled.div`
  padding: ${({ theme }) => theme.space.oneUnit};
`

export const UserProfileCardCoverPhoto = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.four};
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(315deg, rgb(189, 195, 199) 0.00%, rgba(0, 0, 0, 0.2) 1.00%, rgb(0, 0, 0) 100.00%), url('https://public.onlyfans.com/files/thumbs/w480/b/b6/b60/b60sywfzotblrjc4gpl0wou0f2osfh331665495938/183673060/header.jpg');
`

export const UserProfileCardInfoContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

export const UserProfileCardAvatar = styled.div`
  flex: 0 0 auto;
  width: 100px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  margin-top: -25px;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-size: cover;
  background-image: url('https://public.onlyfans.com/files/thumbs/c144/4/4o/4os/4osikoyok2x0ggsk9zkwqveeazjncc9i1665495937/183673060/avatar.jpg');
`

export const UserProfileCardActionsContainer = styled.div`
  gap: 2.5rem;
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  padding:${({ theme }) => theme.space.twoUnits};

  svg {
    fill: var(--dl-color-simpd-s90);
    width: var(--dl-size-size-icontwo);
    cursor: pointer;
    height: var(--dl-size-size-icontwo);
    transition: 0.3s;

    &:hover {
        fill: var(--dl-color-simpd-brand);
    }
  }
`