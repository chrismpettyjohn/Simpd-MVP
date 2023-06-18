import styled from 'styled-components';

export const DialogOverlay = styled.div`
  background: ${({ theme }) => theme.color.black};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  min-width: 100%;
  opacity: 0.4;
`

export const DialogContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.brand};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15%;
  left: 10%;
  height: 80%;
  margin: auto;
  min-height: 500px;
  width: 80%;
  min-width: 500px;
`

export const DialogContainerHeader = styled.div`
`