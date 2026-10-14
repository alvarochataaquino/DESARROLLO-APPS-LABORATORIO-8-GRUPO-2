function ItemCarrito({ item, onAumentar, onDisminuir, onEliminar }) {
  const formatear = (valor) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valor);

  return (
    <li className="item-carrito">
      <img className="imagen-item" src={item.image} alt={item.title} />
      <div className="info-item">
        <h2>{item.title}</h2>
        <p>Precio unitario: {formatear(item.price)}</p>
        <button
          type="button"
          className="boton-texto"
          onClick={() => onEliminar(item.id)}
        >
          Eliminar producto
        </button>
      </div>
      <div className="controles-item">
        <div className="control-cantidad" aria-label={`Cantidad de ${item.title}`}>
          <button type="button" aria-label={`Quitar una unidad de ${item.title}`} onClick={() => onDisminuir(item.id)}>−</button>
          <span>{item.cantidad}</span>
          <button type="button" aria-label={`Agregar una unidad de ${item.title}`} onClick={() => onAumentar(item.id)}>+</button>
        </div>
        <strong className="subtotal-item">{formatear(item.price * item.cantidad)}</strong>
      </div>
    </li>
  );
}

export default ItemCarrito;
