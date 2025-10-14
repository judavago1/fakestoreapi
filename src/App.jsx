import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import "./App.css"; // 

import Home from "./componentes/home";
import Favoritos from "./componentes/favoritos";
import Informativa from "./componentes/informativa";
import Original from "./componentes/original";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/original">Original</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/original" element={<Original />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>
    </> 
  );

}

export default App;
