import React from "react";
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div class="container">
      <Weather defaultCity="Kyiv" />
      <footer>
        Created by Valeria Balatska and is{" "}
      <a href="https://github.com/Valeria-Balatskaya/react-weather" target="blank">open-sourced</a>
      </footer>
      </div>
      </div>
  );
}
