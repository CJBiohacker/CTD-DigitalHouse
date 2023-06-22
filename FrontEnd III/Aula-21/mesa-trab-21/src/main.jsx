import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SupportCallProvider } from "./context/SupportCallContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SupportCallProvider>
    <App />
  </SupportCallProvider>
);
