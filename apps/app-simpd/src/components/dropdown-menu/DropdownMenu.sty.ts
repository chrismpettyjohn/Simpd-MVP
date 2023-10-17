import { styled } from "styled-components";

export const DropdownMenuContainer = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  height: 300px;
  width: 150px;
  overflow-y: auto;
  z-index: 2;
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: ${({ theme }) => theme.space.halfUnit};
`

export const DropdownMenuOption = styled.div`
  background: ${({ theme }) => theme.color.s40};
  border: ${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s90};
  padding: ${({ theme }) => theme.space.halfUnit};
  margin-bottom: ${({ theme }) => theme.space.halfUnit};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
  &:hover {
    color: ${({ theme }) => theme.color.brand};
    border-color: ${({ theme }) => theme.color.brand};
  }
`