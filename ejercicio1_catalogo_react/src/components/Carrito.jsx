import { Link } from "react-router-dom";
import ItemCarrito from "./ItemCarrito";

function Carrito({ items, onAumentar, onDisminuir, onEliminar, onVaciar }) {
  const total = items.reduce((suma, item) => suma + item.price * item.cantidad, 0);
  const unidades = items.reduce((suma, item) => suma + item.cantidad, 0);
  const totalFormateado = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);

  return (
    <section aria-labelledby="titulo-carrito">
      <div className="titulo-seccion">
        <div>
          <p className="etiqueta">RUTA ANIDADA · /catalogo/carrito</p>
          <h1 id="titulo-carrito">Mi carrito</h1>
          <p className="descripcion">Revisa tus productos antes de finalizar la compra.</p>
        </div>
        <Link to="/catalogo" className="boton boton-secundario">← Seguir comprando</Link>
      </div>

      {items.length === 0 ? (
        <div className="panel-estado carrito-vacio">
          <div className="simbolo-carrito" aria-hidden="true">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos desde el catálogo para verlos aquí.</p>
          <Link to="/catalogo" className="boton boton-primario">Ver productos</Link>
        </div>
      ) : (
        <div className="distribucion-carrito">
          <div className="lista-carrito">
            <div className="lista-carrito-cabecera">
              <h2>Productos ({unidades})</h2>
              <button className="boton-texto" onClick={onVaciar}>Vaciar carrito</button>
            </div>
            <ul>
              {items.map((item) => (
                <ItemCarrito
                  key={item.id}
                  item={item}
                  onAumentar={onAumentar}
                  onDisminuir={onDisminuir}
                  onEliminar={onEliminar}
                />
              ))}
            </ul>
          </div>
          <aside className="resumen-carrito" aria-label="Resumen de la compra">
            <h2>Resumen</h2>
            <div className="linea-resumen"><span>Artículos</span><span>{unidades}</span></div>
            <div className="linea-resumen total"><strong>Total</strong><strong>{totalFormateado}</strong></div>
            <p>Los precios están expresados en dólares estadounidenses (USD).</p>
            <span className="aviso-demo">Demostración académica: no procesa pagos reales.</span>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Carrito;
