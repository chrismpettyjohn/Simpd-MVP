import { styled } from "styled-components";

export const NotificationElement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`

export const NotificationContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
  background-color: var(--dl-color-simpd-s30);
`