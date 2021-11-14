import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import App from "./components/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
