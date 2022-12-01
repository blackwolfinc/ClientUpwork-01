import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Homepage } from "./page/Homepage";
import "../src/assets/css/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
{
  /* Frist Page Render */
}
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
