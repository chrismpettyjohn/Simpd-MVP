import { styled } from "styled-components";

export const MessageElement = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  padding: ${({ theme }) => theme.space.oneUnit};
`

export const MessageContent = styled.div`
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  display: flex;
  position: relative;
  transition: 0.3s;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:hover {
   box-shadow: 5px 5px 10px 10px #711b1e;
   border-color: ${({ theme }) => theme.color.brand};
  }
`

export const MessageText = styled.div`
  align-items: center;
  background: linear-gradient(178deg, rgba(203, 188, 188, 0.4) 0.2%, rgba(189, 171, 171, 0.1) 99.37%);
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s90};
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${({ theme }) => theme.space.twoUnits};
`

export const MessageTime = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`