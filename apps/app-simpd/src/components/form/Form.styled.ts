import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.halfUnit};
  width: 100%;
`