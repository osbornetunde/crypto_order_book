import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../injectGlobalStyles";
import theme from "../constants/theme";
import App from "../components/App";
import StyledContainer from "../components/StyledContainer";
import { store } from "../store/store";

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <GlobalStyle />
          <App />
        </StyledContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
