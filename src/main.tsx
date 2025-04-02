import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MainWrapper from "./mainWrapper.tsx";
import { GlobalProvider } from "./providers/globalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <MainWrapper>
        <App />
      </MainWrapper>
    </GlobalProvider>
  </React.StrictMode>
);
