import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TiendaLayout from "./layouts/TiendaLayout";
import Catalogo from "./pages/Catalogo";
import Carrito from "./components/Carrito";
import NoEncontrada from "./pages/NoEncontrada";

const URL_PRODUCTOS = "https://fakestoreapi.com/products";

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [intento, setIntento] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);

  // useEffect + fetch: carga inicial de productos desde una API pública.
  useEffect(() => {
    const controlador = new AbortController();

    async function cargarProductos() {
      setCargando(true);
      setError("");

      try {
        const respuesta = await fetch(URL_PRODUCTOS, {
          signal: controlador.signal,
        });

        if (!respuesta.ok) {
          throw new Error(`La API respondió con el código ${respuesta.status}.`);
        }

        const datos = await respuesta.json();

        if (!Array.isArray(datos)) {
          throw new Error("La API no devolvió una lista de productos válida.");
        }

        setProductos(datos);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "No se pudieron cargar los productos.");
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarProductos();
    return () => controlador.abort();
  }, [intento]);

  // El carrito se administra en App con useState y se comparte por props.
  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => {
      const yaExiste = actual.some((item) => item.id === producto.id);

      if (yaExiste) {
        return actual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...actual, { ...producto, cantidad: 1 }];
    });
  };

  const aumentarCantidad = (id) => {
    setCarrito((actual) =>
      actual.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito((actual) =>
      actual
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((actual) => actual.filter((item) => item.id !== id));
  };

  const cantidadCarrito = carrito.reduce(
    (cantidad, item) => cantidad + item.cantidad,
    0
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogo" replace />} />
        <Route
          path="/catalogo"
          element={<TiendaLayout cantidadCarrito={cantidadCarrito} />}
        >
          <Route
            index
            element={
              <Catalogo
                productos={productos}
                cargando={cargando}
                error={error}
                onReintentar={() => setIntento((valor) => valor + 1)}
                busqueda={busqueda}
                onBuscar={setBusqueda}
                onAgregar={agregarAlCarrito}
              />
            }
          />
          <Route
            path="carrito"
            element={
              <Carrito
                items={carrito}
                onAumentar={aumentarCantidad}
                onDisminuir={disminuirCantidad}
                onEliminar={eliminarDelCarrito}
                onVaciar={() => setCarrito([])}
              />
            }
          />
        </Route>
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
