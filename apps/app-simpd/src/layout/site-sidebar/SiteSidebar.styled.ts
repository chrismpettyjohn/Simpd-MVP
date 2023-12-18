import styled from "styled-components";

export const SiteSidebarElement = styled.div`
  background: black;
  display: flex;
  flex: 1fr;
`
export const SiteSidebarContent = styled.div`
  display: hidden;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.twoUnits};
  gap: ${({ theme }) => theme.space.twoUnits};

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      font-size: ${({ theme }) => theme.fontSize.oneUnit};
      text-transform: lowercase;
      display: flex;
      margin-bottom: ${({ theme }) => theme.space.twoUnits};
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


      .active {
        color: ${({ theme }) => theme.color.brand} !important;
      }

`

export const SiteSidebarHeader = styled.div` 
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  width: 100%;
`