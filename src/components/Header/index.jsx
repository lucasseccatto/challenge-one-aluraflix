import { StyledHeader } from "./styles";

import Nav from "../Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to={"/"}>
        <img src="/images/logo.png" alt="Logo do Aluraflix" />
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
