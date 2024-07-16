import xButton from "/images/x-button.png";
import { useFilmesContext } from "../../context/Filmes";
import NewCategoryForm from "../NewCategoryForm";

import {
  Overlay,
  StyledDialog,
  StyledMoldalTitle,
  StyledModalButton,
} from "./styles";

const AddCategoryModal = () => {
  const filmeContext = useFilmesContext();

  return (
    filmeContext.isCategoryModalOpen && (
      <>
        <Overlay onClick={() => filmeContext.categoryModal(false)} />
        <StyledDialog
          onClose={() => filmeContext.categoryModal(false)}
          open={!!open}
        >
          <StyledMoldalTitle>Adicionar Categoria :</StyledMoldalTitle>
          <NewCategoryForm />
          <StyledModalButton onClick={() => filmeContext.categoryModal(false)}>
            <img src={xButton} alt="botão fechar" />
          </StyledModalButton>
        </StyledDialog>
      </>
    )
  );
};

export default AddCategoryModal;
