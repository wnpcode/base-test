import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Welcome to React");
  const [subtitle, setSubtitle] = useState(
    "To get started, edit src/App.jsx and save to reload."
  );
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </>
  );
}

export default App;
