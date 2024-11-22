import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app.tsx";
import store from "./store/index.ts";

import {
  BrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme.ts";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
);
