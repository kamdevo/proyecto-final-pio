import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CalendarApp from "./CalendarApp.jsx";
import { BrowserRouter } from "react-router";
import { store } from "./store/";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CalendarApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
