import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import { AppLayout } from "./layouts/appLayout/AppLayout";
import { IncomingTasks } from "./pages/incomingTasks/IncomingTasks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLayout>
      <IncomingTasks />
    </AppLayout>
  </StrictMode>,
);
