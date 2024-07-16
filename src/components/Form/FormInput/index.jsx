import { useState } from "react";

import { StyledFormInput, StyledLabel, StyledInput } from "./styles";

const FormInput = ({
  color,
  label,
  id,
  type,
  value,
  placeholder,
  handleChange,
}) => {
  const [isValid, setIsValid] = useState(true);
  return (
    <StyledFormInput>
      <StyledLabel className={isValid ? "" : "invalid"} htmlFor={id}>
        {label}:
      </StyledLabel>
      <StyledInput
        className={isValid ? "" : "invalid"}
        $color={color}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        required
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => setIsValid(event.target.validity.valid)}
      />
    </StyledFormInput>
  );
};

export default FormInput;
