import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker.js";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

serviceWorker.register();
