import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

window.addEventListener("error", (event) => {
  console.error("Qué Pinta client error", event.error ?? event.message);
});
