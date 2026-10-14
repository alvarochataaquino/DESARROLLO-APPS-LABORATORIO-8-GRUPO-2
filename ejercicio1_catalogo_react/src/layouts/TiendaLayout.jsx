import { NavLink, Outlet } from "react-router-dom";

function TiendaLayout({ cantidadCarrito }) {
  return (
    <div className="sitio">
      <header className="barra-superior">
        <div className="contenedor cabecera">
          <NavLink className="marca" to="/catalogo" aria-label="Ir al catálogo">
            <span className="logo-marca" aria-hidden="true">M</span>
            <span>MiniTienda</span>
          </NavLink>
          <nav className="navegacion" aria-label="Navegación principal">
            <NavLink
              to="/catalogo"
              end
              className={({ isActive }) => `enlace-nav${isActive ? " activo" : ""}`}
            >
              Catálogo
            </NavLink>
            <NavLink
              to="/catalogo/carrito"
              className={({ isActive }) => `enlace-nav enlace-carrito${isActive ? " activo" : ""}`}
            >
              Carrito <span className="contador" aria-label={`${cantidadCarrito} artículos`}>{cantidadCarrito}</span>
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="contenedor contenido">
        <Outlet />
      </main>
      <footer className="pie-pagina">
        <div className="contenedor">
          Ejercicio 1 · Catálogo y carrito con React, React Router y FakeStoreAPI
        </div>
      </footer>
    </div>
  );
}

export default TiendaLayout;
