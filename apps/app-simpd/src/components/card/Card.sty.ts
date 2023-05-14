import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 10px 10px #1c1c1e;
  margin-top: ${({ theme }) => theme.space.twoUnits};
  align-items: flex-start;
  position: relative;
`

export const CardHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.s30};
`

export const CardHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.halfUnit};

  h1 {
    color: ${({ theme }) => theme.color.s90};
    font-size: 2rem;
  }

  svg, i {
    color: ${({ theme }) => theme.color.s90};
    cursor: pointer;
    font-size: ${({ theme }) => theme.icon.twoUnits};

    &:hover {
      fill: ${({ theme }) => theme.color.brand};
    }
  }
`

export const CardBody = styled.div`
  background-color: ${({ theme }) => theme.color.s20};
  width: 100%;
`

export const CardBodyContent = styled.div`
  color: ${({ theme }) => theme.color.s90};
  font-size: 1.5rem;
  padding: ${({ theme }) => theme.space.oneUnit};
`