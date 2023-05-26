import { styled } from "styled-components";

export const PostCommentBlockContainer = styled.div`
  background: ${({ theme }) => theme.color.s40};
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  padding: ${({ theme }) => theme.space.halfUnit};
  width: 100%;

  h4 {
    margin: 0;
  }
`