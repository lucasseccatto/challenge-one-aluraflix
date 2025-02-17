import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  background-color: var(--preto);
  position: fixed;
  bottom: 0;
  border-top: var(--border);
  box-shadow: var(--boxShadow);
  z-index: 1;
  > a > img {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    position: relative;
    border-top: none;
    border-bottom: var(--border);
    z-index: 0;
    > a > img {
      display: inline;
      width: 168px;
    }
  }
`;
