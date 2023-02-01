import './App.css';

import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";

export default function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };
  useEffect(() => {
    let btn = document.querySelector(".btn");
    let body = document.querySelector("body");

    btn.addEventListener("click", function () {
      body.classList.toggle("dark");
    });
  });
  return (
    <div className="App">
      <p>hello please click to change color</p>
      {/* <button>color change</button> */}
      <ReactSwitch className="btn" checked={checked} onChange={handleChange} />
    </div>
  );
}
