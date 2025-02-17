import { useFilmesContext } from "../../context/Filmes";
import CategoryTitle from "../CategoryTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledBanner } from "./styles";

const Banner = () => {
  const filmes = useFilmesContext().filmes;
  const categories = useFilmesContext().categories;

  if (filmes.length === 0 || categories.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const sortearVideo = filmes.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sortearVideo.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sortearVideo]);

  const bannerFilme = filmes[currentIndex];
  const bannerFilmeCategory = categories.filter(
    (category) => category.categoria === bannerFilme.categoria
  );
  const categoryColor = bannerFilmeCategory[0].color;

  return (
    <Link to={`/${bannerFilme.id}`}>
      <StyledBanner $bdColor={categoryColor} $cover={bannerFilme.cover}>
        <div>
          <CategoryTitle color={categoryColor}>
            {bannerFilme.categoria}
          </CategoryTitle>
          <h3>{bannerFilme.title}</h3>
          <p>{bannerFilme.description}</p>
        </div>
        <div className="div_img">
          <img src={bannerFilme.cover} alt={bannerFilme.title} />
        </div>
      </StyledBanner>
    </Link>
  );
};

export default Banner;
