import { useLocation } from "react-router-dom";
import NavItem from "../NavItem";

import { StyledNav } from "./styles";

const Nav = () => {
  const activePage = useLocation().pathname;
  return (
    <StyledNav>
      {activePage === "/" ? (
        <NavItem
          url="newvideo"
          image="/images/new-video.png"
          activeImage="/images/blue-home.png"
          reverse={false}
        >
          HOME
        </NavItem>
      ) : (
        <NavItem
          url="/"
          image="/images/home.png"
          activeImage="/images/blue-new-video.png"
          reverse={true}
        >
          NOVO VIDEO
        </NavItem>
      )}
    </StyledNav>
  );
};

export default Nav;
