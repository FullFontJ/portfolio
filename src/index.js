import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./Menu";
import { Projects } from "./Projects";
import { Presentation } from "./Presentation";
import { Skills } from "./Skills";
import { ChallengeFrontend } from "./ChallengeFrontend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <Presentation />
    <Projects />
    <ChallengeFrontend />
    <Skills />
  </React.StrictMode>
);
