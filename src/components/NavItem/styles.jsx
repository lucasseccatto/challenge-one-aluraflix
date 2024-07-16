import styled from "styled-components";

export const StyledNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  > p {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 2px solid #2271d1;
    border-radius: 50px;
    padding: 6px 20px;
    background: #2271d13d;
    color: #2271d1;
    font-weight: 900;
    font-size: 1.25rem;
  }
`;
