import { ThemeProvider } from "styled-components";
import ReduxToastr from "react-redux-toastr";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";

import "./index.css";

import { defaultTheme as theme } from "./app/theme";
import * as serviceWorker from "./serviceWorker";
import { store } from "./app/redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>

      <ReduxToastr
        transitionOut="fadeOut"
        transitionIn="fadeIn"
        position="top-right"
        newestOnTop={false}
        closeOnToastrClick
        preventDuplicates
        timeOut={4000}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
