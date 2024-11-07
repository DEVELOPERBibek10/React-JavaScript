import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactApp = "Bibek";

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Visit Google",
  reactApp
);

createRoot(document.querySelector("#root")).render(reactElement);
