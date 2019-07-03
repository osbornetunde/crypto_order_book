import React, { Fragment, useState, useEffect, useCallback } from "react";
import Modal from "./Modal";
import FontAwesomeIcon from "./FontAwesomeIcon";
import { ReactComponent as Mobile } from "../images/mobile.svg";
import Main from "../containers/Main";
import OrderValue from "../containers/OrderValue";
import StyledDialog from "./StyledDialog";
import StyledWelcomeText from "./StyledWelcomeText";

const App = () => {
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
      <Main />
      <OrderValue />
      {modal ? (
        <Modal onClose={closeModalHandler}>
          <FontAwesomeIcon text="close" onClick={closeModalHandler} />
          <StyledDialog>
            <Mobile style={{ width: "60%", height: "80%" }} />
            <StyledWelcomeText>
              <span>W</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
              <span>!</span>
            </StyledWelcomeText>
          </StyledDialog>
        </Modal>
      ) : null}
    </Fragment>
  );
};

export default App;
