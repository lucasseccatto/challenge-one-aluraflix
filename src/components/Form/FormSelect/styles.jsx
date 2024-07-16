import styled from "styled-components";

export const StyledFormSelect = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  width: 90%;
  background-color: transparent;
`;

export const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  &.invalid {
    color: #aa0000;
  }
`;
export const StyledSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 62px;
  font-size: 1.25rem;
  background-color: transparent;
  font-weight: 600;
  color: #ffffff;
  border: 3px solid ${(props) => props.$color};
  border-radius: 15px;
  padding-left: 10px;
  outline: none;
  &:invalid {
    color: #a5a5a5;
  }
  &.invalid {
    border: 3px solid #aa0000;
  }
  > option {
    color: #000000;
  }
`;
