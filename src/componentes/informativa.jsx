import React from "react";

function Informativa() {
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff", // azul claro
        color: "#003366", // azul oscuro para texto
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#0066cc" }}>
          🧾 Información del Proyecto
        </h1>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ borderBottom: "2px solid #cce7ff", paddingBottom: "8px" }}>
            Acerca de la API
          </h2>
          <p style={{ lineHeight: "1.6" }}>
            Este proyecto utiliza la{" "}
            <strong>Fake Store API</strong>, un servicio gratuito que proporciona
            datos falsos de productos de una tienda en línea.  
            Nos permite practicar llamadas a APIs REST y mostrar información realista,
            incluyendo nombre del producto, categoría, imagen y precio.
          </p>
          <p style={{ lineHeight: "1.6" }}>
            La API es ideal para aprender sobre consumo de datos JSON en aplicaciones React,
            ya que simula un entorno de comercio electrónico completamente funcional sin necesidad
            de crear un backend propio.
          </p>
          <p>
            👉 URL base de la API:{" "}
            <a
              href="https://fakestoreapi.com/products"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066cc", textDecoration: "none" }}
            >
              https://fakestoreapi.com/products
            </a>
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ borderBottom: "2px solid #cce7ff", paddingBottom: "8px" }}>
            Objetivo del Proyecto
          </h2>
          <p style={{ lineHeight: "1.6" }}>
            El propósito principal de este sitio es aprender a consumir APIs,
            trabajar con datos dinámicos en React, y aplicar filtrado y búsqueda
            de información en listas.  
            Además, se busca practicar diseño limpio, manejo de estados (`useState` y `useEffect`),
            y uso de enrutamiento con React Router.
          </p>
        </section>

        <section>
          <h2 style={{ borderBottom: "2px solid #cce7ff", paddingBottom: "8px" }}>
            Información de Contacto
          </h2>
          <p>
            📧 <strong>Email:</strong> soporte@tiendafalsa.com
          </p>
          <p>
            ☎️ <strong>Teléfono:</strong> +57 320 456 7890
          </p>
          <p>
            🏢 <strong>Dirección:</strong> Calle 45 #67-89, Bogotá, Colombia
          </p>
          <p>
            🌐 <strong>Sitio web:</strong>{" "}
            <a
              href="https://fakestoreapi.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066cc", textDecoration: "none" }}
            >
              www.fakestoreapi.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Informativa;
