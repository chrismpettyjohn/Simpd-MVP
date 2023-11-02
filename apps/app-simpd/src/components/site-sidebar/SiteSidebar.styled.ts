import styled from "styled-components";

export const SiteSidebarElement = styled.div`
  background: black;
  display: flex;
  flex: 1fr;
`
export const SiteSidebarContent = styled.div`
  display: flex;
  justify-items: center;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.twoUnits};
`