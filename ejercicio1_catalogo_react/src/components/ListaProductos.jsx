import ProductoCard from "./ProductoCard";

function ListaProductos({ productos, onAgregar }) {
  if (productos.length === 0) {
    return (
      <div className="panel-estado">
        <h2>Sin resultados</h2>
        <p>No hay productos que coincidan con tu búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="cuadricula-productos">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          onAgregar={onAgregar}
        />
      ))}
    </div>
  );
}

export default ListaProductos;
