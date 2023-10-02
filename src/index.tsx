import { createRoot } from "react-dom/client";
import Router from "./container/Router";

import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(<Router />);
