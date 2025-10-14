import React, { useEffect, useState } from "react";

function Original() {
  const [ofertas, setOfertas] = useState([]);
  const [detallesVisibles, setDetallesVisibles] = useState({});

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchOfertas = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Error al cargar productos");
        const data = await resp.json();

        // Aplicar 20% de descuento a todos los productos
        const productosConDescuento = data.map((p) => ({
          ...p,
          precioOriginal: p.price,
          price: p.price * 0.8, // precio con 20% de descuento
        }));

        // Filtrar productos cuyo precio con descuento es menor a $50
        const productosEnOferta = productosConDescuento.filter((p) => p.price < 50);

        setOfertas(productosEnOferta);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchOfertas();
  }, []);

  // Alternar visibilidad de detalles
  const toggleDetalles = (id) => {
    setDetallesVisibles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🔥 Ofertas Especiales (con 20% de descuento)</h1>

      {ofertas.length === 0 ? (
        <p>Cargando ofertas...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {ofertas.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#fdf6e3",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
              />
              <h3 style={{ fontSize: "16px", minHeight: "50px" }}>{item.title}</h3>

              {/* Precio original tachado */}
              <p style={{ textDecoration: "line-through", color: "gray", margin: "5px 0" }}>
                ${item.precioOriginal.toFixed(2)}
              </p>

              {/* Precio con descuento */}
              <p style={{ color: "green", fontWeight: "bold", margin: "5px 0" }}>
                Oferta: ${item.price.toFixed(2)}
              </p>

              {/* Botón de ver más */}
              <button
                onClick={() => toggleDetalles(item.id)}
                style={{
                  marginTop: "10px",
                  backgroundColor: "#ff9800",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                {detallesVisibles[item.id] ? "Ocultar detalles" : "Ver más"}
              </button>

              {/* Detalles adicionales */}
              {detallesVisibles[item.id] && (
                <div style={{ marginTop: "10px", textAlign: "left", fontSize: "14px" }}>
                  <p><strong>Categoría:</strong> {item.category}</p>
                  <p><strong>Descripción:</strong> {item.description}</p>
                  <p><strong>ID:</strong> {item.id}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Original;
