import { createRoot } from "react-dom";
import App from "./App";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(<App />);
