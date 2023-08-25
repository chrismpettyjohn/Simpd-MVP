import styled from "styled-components";

export const BugTestingNoticeCard = styled.div`
  display: block;
  width: 100%;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.s90};
  padding:  ${({ theme }) => theme.space.twoUnits};
  a {
    color: ${({ theme }) => theme.color.s50};
    text-decoration: none;
    &:hover {
     text-decoration: underline;
    }
  }
`