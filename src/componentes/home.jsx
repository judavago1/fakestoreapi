import React, { useEffect, useState } from "react";

function Home({ agregarAlCarrito }) {
  // 🧠 Declarar los estados
  const [productos, setProductos] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todos");

  // 🌐 Llamado a la API al montar el componente
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchJson = async (url, setter) => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Error al cargar JSON: " + resp.status);
        const json = await resp.json();
        setter(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchJson(url, setProductos);
  }, []);

  // 🔍 Filtrar productos
  const listaFiltrada = (productos || [])
    .filter((item) =>
      item.title.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((item) =>
      categoria === "todos" ? true : item.category === categoria
    );

  // 📂 Obtener categorías únicas
  const categorias = productos
    ? ["todos", ...new Set(productos.map((p) => p.category))]
    : [];

  return (
    <div style={{ padding: "20px", margin: "0 auto", textAlign: "center" }}>
      <h1>🛒 Catálogo de Productos</h1>

      {/* Selector de categoría */}
      <div style={{ marginBottom: "10px" }}>
        <label>Filtrar por categoría: </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Barra de búsqueda */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Lista de productos */}
      <div>
        {!productos ? (
          <p>Cargando productos...</p>
        ) : listaFiltrada.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              listStyle: "none",
              padding: 0,
            }}
          >
            {listaFiltrada.map((item) => (
              <li
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor: "#fafafa",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <h3 style={{ fontSize: "16px" }}>{item.title}</h3>
                <p>{item.category}</p>
                <p style={{ fontWeight: "bold" }}>${item.price}</p>

                {/* 🛒 Botón para agregar al carrito */}
                <button
                  onClick={() => agregarAlCarrito(item)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Agregar al carrito
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
