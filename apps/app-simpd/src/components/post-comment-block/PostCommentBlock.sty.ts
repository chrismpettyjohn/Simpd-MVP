import { styled } from "styled-components";

export const PostCommentBlockContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s40};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  padding: ${({ theme }) => theme.space.halfUnit};
  width: 100%;

  h4 {
    margin: 0;
  }
`