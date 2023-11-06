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

  ul {
    list-style-type: none;

    li {
      font-size: ${({ theme }) => theme.fontSize.oneUnit};
      text-transform: lowercase;
      display: flex;
      text-align: left;
      margin-bottom: ${({ theme }) => theme.space.oneUnit};
      i {
        font-size: ${({ theme }) => theme.fontSize.twoUnits};
        margin-right: ${({ theme }) => theme.space.threeUnits};
      }
      &:hover {
        color: ${({ theme }) => theme.color.brand};
        cursor: pointer;
      }
    }
    
    hr {
      margin-top: ${({ theme }) => theme.space.twoUnits};
      margin-bottom: ${({ theme }) => theme.space.twoUnits};
    }
  }

`