import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const DOMAIN_AUTH = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENT_AUTH = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN_AUTH}
      clientId={CLIENT_AUTH}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
