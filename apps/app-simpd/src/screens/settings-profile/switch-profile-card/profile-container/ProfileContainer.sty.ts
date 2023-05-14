import { styled } from "styled-components";

export const ProfileElement = styled.div`
  background-color: ${({ theme }) => theme.color.s20};
  color: ${({ theme }) => theme.color.s90};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.space.twoUnits};
`

export const ProfileButton = styled.button`
`