import { useState } from "react";

import { StyledLabel, StyledSelect, StyledFormSelect } from "./styles";

const FormSelect = ({ color, label, id, categories, value, handleChange }) => {
  const [isValid, setIsValid] = useState(true);
  return (
    <StyledFormSelect>
      <StyledLabel className={isValid ? "" : "invalid"} htmlFor={id}>
        {label}:
      </StyledLabel>
      <StyledSelect
        className={isValid ? "" : "invalid"}
        $color={color}
        id={id}
        value={value}
        required
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => setIsValid(event.target.validity.valid)}
      >
        <option value="" hidden>
          {" "}
          Escolha a categoria
        </option>
        {categories.map((category) => (
          <option key={category.categoria}>{category.categoria}</option>
        ))}
      </StyledSelect>
    </StyledFormSelect>
  );
};

export default FormSelect;
