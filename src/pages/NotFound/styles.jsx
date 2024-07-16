import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
  margin-top: 20px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: calc(100vh - 245px);
    margin-top: 20px;
  }
`;
export const StyledDiv = styled.div`
  flex: 1;
  font-family: "Roboto", sans-serif;
  text-align: center;
  > img {
    width: 300px;
  }
  > h3 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 20px;
  }
  > p {
    font-size: 1.25rem;
    line-height: 25px;
  }
  @media screen and (min-width: 1024px) {
    > img {
      width: 500px;
    }
    > h3 {
      font-size: 3rem;
    }
    > p {
      font-size: 1.5rem;
    }
  }
`;
