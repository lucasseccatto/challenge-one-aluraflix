import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  margin: 100px auto 120px;
  min-height: 500px;
  > iframe {
    width: 90%;
    max-width: 816px;
    min-height: 320px;
    flex: 1;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 25px;
    margin-bottom: 0;
    padding: 50px;
    height: calc(100vh - 250px);
  }
`;
export const StyledTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 900;
  border-bottom: 3px solid var(--border-botton-categorias);
`;
