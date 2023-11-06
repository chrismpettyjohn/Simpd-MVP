import styled from "styled-components";

export const ContainerElement = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space.twoUnits};
  width: ${({ theme }) => `calc(100% - ${theme.space.twoUnits} - ${theme.space.twoUnits})`};
`