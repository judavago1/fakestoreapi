function Favoritos({ carrito, total, eliminarDelCarrito }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🛍️ Productos en tu carrito</h1>

      {carrito.length === 0 ? (
        <p>No has agregado ningún producto.</p>
      ) : (
        <>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              listStyle: "none",
              padding: 0,
            }}
          >
            {carrito.map((item) => (
              <li
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  backgroundColor: "#fdfdfd",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100px", height: "100px", objectFit: "contain" }}
                />
                <h3 style={{ fontSize: "16px" }}>{item.title}</h3>
                <p>{item.category}</p>
                <p style={{ fontWeight: "bold" }}>${item.price}</p>
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          {/* 💰 Total */}
          <h2 style={{ marginTop: "20px" }}>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Favoritos;