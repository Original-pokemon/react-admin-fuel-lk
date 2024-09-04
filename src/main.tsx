import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app.tsx";
import store from "./store/index.ts";
import { setCards } from "./store/action.ts";
import HistoryRouter from "./components/history-route/history-route.tsx";
import browserHistory from './browser-history/browser-history';
store.dispatch(setCards());

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
);
