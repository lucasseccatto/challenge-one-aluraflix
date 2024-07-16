import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 575px;
  margin: 0 auto;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 525px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledFormButton = styled.button`
  width: 180px;
  height: 54px;
  background-color: transparent;
  font-size: 1.25rem;
  font-weight: 900;
  color: #ffffff;
  border: 3px solid #2271d1;
  border-radius: 15px;
  &.white {
    border: 3px solid #ffffff;
  }
  &:hover {
    background-color: #000000e5;
    border: 2px solid #2271d1;
    box-shadow: 0px 0px 12px 4px #2271d1 inset;
    color: #2271d1;
  }
`;
