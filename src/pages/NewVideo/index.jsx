import Form from "../../components/Form";
import AddCategoryModal from "../../components/AddCategoryModal";
import { useFilmesContext } from "../../context/Filmes";

import {
  StyledNewVideoContainer,
  StyledTitle,
  StyledParagraph,
  StyledFormContainer,
  StyledSubTitle,
  StyledNewCategoryButton,
} from "./styles";

const NewVideo = () => {
  const filmeContext = useFilmesContext();

  return (
    <StyledNewVideoContainer>
      <StyledTitle> NOVO VÍDEO </StyledTitle>
      <StyledParagraph>
        Preencha todo o formulário para criar um novo vídeo
      </StyledParagraph>
      <StyledFormContainer>
        <StyledSubTitle>CRIAR VIDEO</StyledSubTitle>
        <Form />
      </StyledFormContainer>
      <StyledNewCategoryButton onClick={() => filmeContext.categoryModal(true)}>
        Nova Categoria
      </StyledNewCategoryButton>
      <AddCategoryModal />
    </StyledNewVideoContainer>
  );
};

export default NewVideo;
