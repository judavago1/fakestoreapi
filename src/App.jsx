import { HashRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import "./App.css";

import Home from "./componentes/home";
import Favoritos from "./componentes/favoritos";
import Informativa from "./componentes/informativa";
import Original from "./componentes/original";

function App() {
  // 🛒 Estado global del carrito
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  // Calcular total
  const total = carrito.reduce((acc, prod) => acc + prod.price, 0);

  return (
    <Router>
      <nav className="c-menu">
        <Link to="/">Home</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/original">Original</Link>
        <Link to="/favoritos">
          Favoritos ({carrito.length})
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/original" element={<Original />} />
        <Route
          path="/favoritos"
          element={
            <Favoritos
              carrito={carrito}
              total={total}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
