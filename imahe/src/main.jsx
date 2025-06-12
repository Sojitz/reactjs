import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    {/* <Sidebar /> */}
    <MainContent />
  </StrictMode>
);
