import { useFilmesContext } from "../../context/Filmes";
import CategoryContainer from "../CategoryContainer";

import { StyledFilmesContainer } from "./styles";

const FilmesContainer = () => {
  const categories = useFilmesContext().categories;
  const filmes = useFilmesContext().filmes;

  if (filmes.length === 0 || categories.length === 0) {
    return null;
  }

  return (
    <StyledFilmesContainer>
      {categories.map((category) => (
        <CategoryContainer
          key={category.categoria}
          categories={category}
          filmes={filmes.filter(
            (filme) => filme.categoria === category.categoria
          )}
        />
      ))}
    </StyledFilmesContainer>
  );
};

export default FilmesContainer;
