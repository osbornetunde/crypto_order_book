import React from "react";
import ReactDOM from "react-dom";
import StyledModal from "./StyledModal";
import StyledModalBackdrop from "./StyledModalBackdrop";

const modalRoot = document.getElementById("modal-root");

const Modal = props =>
  ReactDOM.createPortal(
    <StyledModalBackdrop onClick={props.onClose}>
      <StyledModal>{props.children}</StyledModal>
    </StyledModalBackdrop>,
    modalRoot
  );
export default Modal;
