import { useState } from "react";
import "./App.css";
import ColourBar from "./ColourBar";

function App() {
  const [bgColor, setBgColor] = useState("White");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100vh",
        width: "100vw",
        background: bgColor,
      }}
    >
      <ColourBar setState={setBgColor} />
    </div>
  );
}

export default App;
