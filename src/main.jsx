import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import { AppLayout } from "@/layouts";
import { IncomingTasks } from "@/pages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLayout>
      <IncomingTasks />
    </AppLayout>
  </StrictMode>,
);
