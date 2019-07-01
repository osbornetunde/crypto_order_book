import React, { Fragment, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import FontAwesomeIcon from "./FontAwesomeIcon";
import { ReactComponent as Mobile } from "../images/mobile.svg";

const Dialog = styled.div`
  min-width: 50%;
  min-height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

const WelcomeText = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: rgba(116, 223, 112, 0.9);
  text-align: center;
`;

function App() {
  const [modal, setModal] = useState(false);

  const modalHandler = useCallback(() => {
    return setModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    return setModal(false);
  }, []);

  useEffect(() => {
    modalHandler();
  }, [modalHandler]);

  return (
    <Fragment>
      <div>Hi</div>
      {modal ? (
        <Modal onClose={closeModalHandler}>
          <FontAwesomeIcon text="close" onClick={closeModalHandler} />
          <Dialog>
            <Mobile style={{ width: "60%", height: "80%" }} />
            <WelcomeText>Welcome to Order Book!</WelcomeText>
          </Dialog>
        </Modal>
      ) : null}
    </Fragment>
  );
}

export default App;
