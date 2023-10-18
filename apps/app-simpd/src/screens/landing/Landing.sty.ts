import styled from "styled-components";

export const LandingContainerElement = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  background: linear-gradient(180deg, #000000 0%, #71023F 100%);
  justify-content: center;
  min-height: 100%;
  padding: ${({ theme }) => theme.space.twoUnits};  

  h2 {
    color: ${({ theme }) => theme.color.s60};
    font-size: 3em;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
  }
`

export const LandingBubbleGridElement = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.space.twoUnits};  
`

export const LandingBubbleElement = styled.img`
  border-radius: ${({ theme }) => theme.radius.round};
  width: 8vw;
`