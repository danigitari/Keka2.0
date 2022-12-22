import { useState } from "react";
import {Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home"
import "./index.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  );
}

export default App;
