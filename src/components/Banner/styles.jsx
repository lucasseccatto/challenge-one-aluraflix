import styled from "styled-components";

export const StyledBanner = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 500px;
    margin: 20px 0;
    padding: 0 40px;
    background: linear-gradient(#0012338f, #0012338f),
      url(${(props) => props.$cover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 4px solid ${(props) => props.$bdColor};
    box-shadow: 0px 0px 10px 6px ${(props) => props.$bdColor} inset;
    cursor: pointer;
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    h3 {
      font-family: "Roboto", sans-serif;
      font-size: 3rem;
      margin: 20px 0;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-size: 1.125rem;
      font-weight: 300;
      color: #f5f5f5;
      text-align: justify;
    }
    .div_img {
      max-width: 400px;
      box-shadow: 0px 0px 0px 1px ${(props) => props.$bdColor};
    }
    img {
      width: 100%;
      max-width: 400px;
      align-self: center;
    }
  }
`;
