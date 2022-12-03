import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { Homepage } from "./page/Homepage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
