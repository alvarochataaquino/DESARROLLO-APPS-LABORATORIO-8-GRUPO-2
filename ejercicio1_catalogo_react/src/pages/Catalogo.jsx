import BuscadorProducto from "../components/BuscadorProducto";
import ListaProductos from "../components/ListaProductos";

function Catalogo({
  productos,
  cargando,
  error,
  onReintentar,
  busqueda,
  onBuscar,
  onAgregar,
}) {
  // Búsqueda por nombre: coincide sin distinguir mayúsculas y minúsculas.
  const filtrados = productos.filter((producto) =>
    producto.title.toLocaleLowerCase().includes(busqueda.trim().toLocaleLowerCase())
  );

  return (
    <section aria-labelledby="titulo-catalogo">
      <div className="presentacion">
        <div>
          <p className="etiqueta">EJERCICIO 1 · LABORATORIO 07</p>
          <h1 id="titulo-catalogo">Catálogo de productos</h1>
          <p className="descripcion">
            Explora los productos, encuentra lo que buscas y agrégalo a tu carrito.
          </p>
        </div>
        <div className="sello-presentacion" aria-hidden="true">Tienda React</div>
      </div>

      <div className="barra-catalogo">
        <BuscadorProducto busqueda={busqueda} onBuscar={onBuscar} />
        {!cargando && !error && (
          <p className="conteo-productos" role="status">
            {filtrados.length} de {productos.length} productos
          </p>
        )}
      </div>

      {cargando ? (
        <div className="panel-estado" role="status">
          <div className="cargador" aria-hidden="true" />
          <p>Cargando productos desde la API...</p>
        </div>
      ) : error ? (
        <div className="panel-estado panel-error" role="alert">
          <h2>No se pudo cargar el catálogo</h2>
          <p>{error}</p>
          <p>Comprueba tu conexión a Internet y vuelve a intentarlo.</p>
          <button className="boton boton-primario" onClick={onReintentar}>
            Reintentar
          </button>
        </div>
      ) : (
        <ListaProductos productos={filtrados} onAgregar={onAgregar} />
      )}
    </section>
  );
}

export default Catalogo;
