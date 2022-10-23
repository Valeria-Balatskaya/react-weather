import React from "react";
import './App.css';
import Weather from "./Weather"
import image from "./img/background.jpg"

export default function App() {
  return (
    <div className="page">
    <div className="App" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", borderRadius:14, height:400}}>
      <div class="container">
      <Weather defaultCity="Kyiv" />
      </div>
      </div>
      <footer className="bottom">
        Created by Valeria Balatska and is{" "}
      <a href="https://github.com/Valeria-Balatskaya/react-weather" target="blank" >open-sourced</a>
      </footer>
      </div>
  );
}
