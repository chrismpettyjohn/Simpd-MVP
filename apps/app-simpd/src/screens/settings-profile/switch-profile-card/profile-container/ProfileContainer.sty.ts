import { styled } from "styled-components";

export const ProfileElement = styled.div`
  background-color: ${({ theme }) => theme.color.s30};
  color: ${({ theme }) => theme.color.s90};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.space.twoUnits};
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  border-radius: ${({ theme }) => theme.radius.four};
`

export const ProfileButton = styled.button`
`

export const ProfileIndicator = styled.i<{ selected: boolean }>` 
  color: ${({ selected, theme }) => selected ? theme.color.brand : theme.color.s90};
  margin-right: ${({ theme }) => theme.space.oneUnit};
`