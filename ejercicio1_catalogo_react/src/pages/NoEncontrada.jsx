import { Link } from "react-router-dom";

function NoEncontrada() {
  return (
    <main className="pagina-404">
      <h1>404 · Página no encontrada</h1>
      <p>La dirección que escribiste no existe.</p>
      <Link className="boton boton-primario" to="/catalogo">Regresar al catálogo</Link>
    </main>
  );
}

export default NoEncontrada;
