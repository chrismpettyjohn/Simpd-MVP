import { styled } from "styled-components";

export const DropdownMenuContainer = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.four};
  height: 300px;
  width: 150px;
  overflow-y: auto;
  z-index: 2;
  position: absolute;
  top: -.5rem;
  right: -2.5rem;
  padding: ${({ theme }) => theme.space.halfUnit};
`

export const DropdownMenuOption = styled.div`
  background: ${({ theme }) => theme.color.s40};
  border-radius: ${({ theme }) => theme.radius.four};
  padding: ${({ theme }) => theme.space.halfUnit};
  margin-bottom: ${({ theme }) => theme.space.halfUnit};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
`