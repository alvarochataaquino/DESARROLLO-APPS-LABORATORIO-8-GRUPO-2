function ProductoCard({ producto, onAgregar }) {
  const precio = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(producto.price);

  return (
    <article className="producto-card">
      <div className="producto-foto">
        <img src={producto.image} alt={producto.title} loading="lazy" />
      </div>
      <div className="producto-informacion">
        <p className="categoria">{producto.category}</p>
        <h2 className="producto-nombre" title={producto.title}>{producto.title}</h2>
        <div className="producto-compra">
          <strong className="producto-precio">{precio}</strong>
          <button
            type="button"
            className="boton boton-primario"
            onClick={() => onAgregar(producto)}
            aria-label={`Agregar ${producto.title} al carrito`}
          >
            Agregar +
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductoCard;
