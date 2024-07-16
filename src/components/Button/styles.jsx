import styled from "styled-components";

export const StyledButton = styled.button`
  width: 180px;
  height: 54px;
  background-color: transparent;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  color: var(--branco);
  font-size: 1.25rem;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  &.active {
    background-color: #000000e5;
    border: 2px solid #2271d1;
    box-shadow: 0px 0px 12px 4px #2271d1 inset;
    color: #2271d1;
  }
  &:hover {
    background-color: #000000e5;
    border: 2px solid #2271d1;
    box-shadow: 0px 0px 12px 4px #2271d1 inset;
    color: #2271d1;
  }
`;
