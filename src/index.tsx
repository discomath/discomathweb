import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./util/sw";

ReactDOM.render(
  <React.StrictMode>
    {/* CssBaseline performs a normalize.css-like reset */}
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
