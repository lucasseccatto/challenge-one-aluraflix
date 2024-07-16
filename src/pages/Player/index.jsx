import { useParams } from "react-router-dom";
import { useFilmesContext } from "../../context/Filmes";
import { StyledSection, StyledTitle } from "./styles";
import NotFound from "../NotFound";

const Player = () => {
  const parameters = useParams();
  const filmes = useFilmesContext().filmes;
  const mostrarVideo = filmes.find(
    (filme) => Number(filme.id) === Number(parameters.id)
  );

  if (!mostrarVideo) {
    return <NotFound />;
  }

  return (
    <StyledSection>
      <StyledTitle>{mostrarVideo.title}</StyledTitle>
      <iframe
        src={mostrarVideo.link}
        title={mostrarVideo.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </StyledSection>
  );
};

export default Player;
