import deleteIcon from "../../img/delete-icon.png";
import editIcon from "../../img/edit-icon.png";
import { useFilmesContext } from "../../context/Filmes";
import { Link } from "react-router-dom";

import {
  StyledGameCard,
  StyledGameImage,
  StyledParagraph,
  StyledCardButtonsContainer,
  StyledCardButton,
} from "./styles";

const VideoCard = ({ color, filme }) => {
  const filmesContext = useFilmesContext();
  return (
    <StyledGameCard>
      <Link to={`/${filme.id}`}>
        <StyledGameImage $color={color} $bgImage={filme.cover} />
        <StyledParagraph $color={color}>{filme.title}</StyledParagraph>
      </Link>
      <StyledCardButtonsContainer $color={color}>
        <StyledCardButton onClick={() => filmesContext.deleteFilme(filme)}>
          <img src={deleteIcon} alt="botão deletar video" />
          DELETAR
        </StyledCardButton>
        <StyledCardButton onClick={() => filmesContext.editCard(filme)}>
          <img src={editIcon} alt="botão editar video" />
          EDITAR
        </StyledCardButton>
      </StyledCardButtonsContainer>
    </StyledGameCard>
  );
};

export default VideoCard;
