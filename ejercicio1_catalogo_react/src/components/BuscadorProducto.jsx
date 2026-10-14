function BuscadorProducto({ busqueda, onBuscar }) {
  return (
    <form className="buscador" role="search" onSubmit={(evento) => evento.preventDefault()}>
      <label htmlFor="buscar-producto">Buscar por nombre</label>
      <div className="campo-busqueda">
        <span aria-hidden="true" className="icono-buscar">⌕</span>
        <input
          id="buscar-producto"
          type="search"
          placeholder="Ej.: camiseta, mochila..."
          value={busqueda}
          onChange={(evento) => onBuscar(evento.target.value)}
        />
      </div>
    </form>
  );
}

export default BuscadorProducto;
