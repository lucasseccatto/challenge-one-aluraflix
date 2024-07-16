import styled from "styled-components";

export const StyledVideoCardContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  gap: 20px;
  border-bottom: 3px solid var(--border-botton-categorias);
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #2271d1 #2271d12b;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar {
    background-color: #2271d12b;
    border: 5px;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2271d1;
    border-radius: 20px;
  }
`;
