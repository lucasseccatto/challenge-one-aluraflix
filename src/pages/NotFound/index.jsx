import notFoundImage from "../../img/not-found.png";

import { StyledSection, StyledDiv } from "./styles";

const NotFound = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <img src={notFoundImage} alt="Imagem de página não encontrada" />
      </StyledDiv>
      <StyledDiv>
        <h3>OPS!</h3>
        <p>A página que você procura não foi encontrada!</p>
      </StyledDiv>
    </StyledSection>
  );
};

export default NotFound;
