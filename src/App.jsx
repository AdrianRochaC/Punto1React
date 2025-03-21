import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Estado from "./Estado";
import Texto from "./String";
import Booleano from "./Boolean";
import Lista from "./Lista";
import Objeto from "./Objeto";
import Clase from "./Clase";
function App() {
  return (
    <div>
      <h2>Estado JSX</h2>
      <Estado />
      <h2>String JSX</h2>
      <Texto />
      <h2>Booleano JSX</h2>
      <Booleano />
      <h2>Lista JSX</h2>
      <Lista />
      <h2>Objeto JSX</h2>
      <Objeto />
      <h2>Clase JSX</h2>
      <Clase />
    </div>
  );
}

export default App;
