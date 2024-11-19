import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";
import { ComponentProvider } from "./context/ComponentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <ComponentProvider>
        <App />
      </ComponentProvider>
    </LoginProvider>
  </StrictMode>
);
