import { styled } from "styled-components";

export const CommentReactionsElement = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.twoUnits};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
  }

  i {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
  }
`