import { StyledButton } from "./styles";

const Button = ({ children, isActive }) => {
  return (
    <StyledButton className={isActive ? "active" : ""}>{children}</StyledButton>
  );
};

export default Button;
