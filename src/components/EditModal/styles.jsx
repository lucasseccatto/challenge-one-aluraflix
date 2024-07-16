import styled from "styled-components";

export const Overlay = styled.div`
  background-color: #000000b2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const StyledDialog = styled.dialog`
  position: absolute;
  top: 380px;
  left: 0%;
  width: 374px;
  background-color: #03122f;
  padding: 70px 0 60px 0;
  border: 5px solid #6bd1ff;
  border-radius: 15px;
  @media screen and (min-width: 1024px) {
    width: 865px;
  }
`;

export const StyledMoldaTitle = styled.h2`
  width: 100%;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: #2271d1;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 3.75rem;
    text-align: left;
    max-width: 575px;
    margin: 0 auto 40px;
  }
`;
export const StyledModalButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
