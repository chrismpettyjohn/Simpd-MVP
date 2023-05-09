import { styled } from "styled-components";

export const PostCardElement = styled.div`
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  position: relative;
  box-shadow: 5px 5px 10px 10px #1c1c1e;
  max-height: 800px;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-simpd-s30);
  margin-bottom: var(--dl-space-space-twounits);

  &:hover {
    box-shadow: 5px 5px 10px 10px #711b1e;
  }

  .post-card-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .post-card-text {
    color: var(--dl-color-simpd-s90);
    width: 100%;
    font-size: 1rem;
    margin-top: var(--dl-space-space-twounits);
    font-family: Maven Pro;
  }

}
`