import { useFilmesContext } from "../../context/Filmes";
import Form from "../Form";
import xButton from "/images/x-button.png";

import {
  Overlay,
  StyledDialog,
  StyledModalButton,
  StyledMoldaTitle,
} from "./styles";

const EditModal = ({ selectedCard }) => {
  const gameContext = useFilmesContext();

  function closeModal() {
    gameContext.editCard(null);
  }

  return (
    selectedCard && (
      <>
        <Overlay onClick={() => closeModal()} />
        <StyledDialog onClose={() => closeModal()} open={!!selectedCard}>
          <StyledMoldaTitle>EDITAR CARD :</StyledMoldaTitle>
          <Form method="dialog" game={selectedCard}></Form>
          <StyledModalButton onClick={() => closeModal()}>
            <img src={xButton} alt="botão fechar" />
          </StyledModalButton>
        </StyledDialog>
      </>
    )
  );
};

export default EditModal;
