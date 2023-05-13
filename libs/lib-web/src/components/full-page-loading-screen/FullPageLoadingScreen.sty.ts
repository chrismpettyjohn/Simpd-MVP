import { styled } from 'styled-components';

export const FullPageLoadingScreenContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: black;
  align-items: center;
  justify-content: center;

  i {
    color: ${({ theme }) => theme.color.s90};
    font-size: 4rem;
  }
`