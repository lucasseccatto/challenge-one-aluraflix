import VideoCard from "../VideoCard";
import CategoryTitle from "../CategoryTitle";

import { StyledVideoCardContainer } from "./styles";

const CategoryContainer = ({ categories, filmes }) => {
  const hasFilmes = filmes.length > 0;
  return (
    hasFilmes && (
      <>
        <CategoryTitle color={categories.color}>
          {categories.categoria}
        </CategoryTitle>
        <StyledVideoCardContainer>
          {filmes.map((filme) => (
            <VideoCard
              key={filme.title}
              color={categories.color}
              filme={filme}
            />
          ))}
        </StyledVideoCardContainer>
      </>
    )
  );
};

export default CategoryContainer;
