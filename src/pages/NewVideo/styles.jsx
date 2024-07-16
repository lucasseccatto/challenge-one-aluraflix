import styled from "styled-components";

export const StyledNewVideoContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 90px auto 120px;
  padding: 0 10px;
  position: sticky;
`;
export const StyledTitle = styled.h2`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 20px;
`;
export const StyledParagraph = styled.p`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 40px;
`;
export const StyledFormContainer = styled.div`
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledSubTitle = styled.h3`
  padding: 15px;
  font-size: 2.25rem;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  border-top: 3px solid #393939;
  border-bottom: 3px solid #393939;
  margin-bottom: 20px;
`;
export const StyledNewCategoryButton = styled.button`
  position: absolute;
  top: -80px;
  right: 20px;
  background-color: transparent;
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  color: #ffffff;
  font-size: 1rem;
  &:hover {
    background-color: #000000e5;
    border: 2px solid #2271d1;
    box-shadow: 0px 0px 12px 4px #2271d1 inset;
    color: #2271d1;
  }
`;
