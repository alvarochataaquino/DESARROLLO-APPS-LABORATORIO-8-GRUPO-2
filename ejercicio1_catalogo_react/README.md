# Ejercicio 1 - Catálogo de productos con carrito de compras

**Curso:** Desarrollo de Aplicaciones, Laboratorio N.º 07 — React Router y Context.

Proyecto funcional creado en **React + Vite**, basado en el **Ejercicio Propuesto N.º 1 (página 14)** de la guía. No incluye `node_modules` para reducir el tamaño del ZIP.

## 1. Requisitos previos

Tener instalado Node.js y npm. Comprueba las versiones en la terminal:

```bash
node -v
npm -v
```

## 2. Cómo ejecutar en VS Code

1. Descomprime el ZIP.
2. Abre la carpeta `ejercicio1_catalogo_react` en VS Code.
3. Abre **Terminal > Nueva terminal**.
4. Ejecuta:

```bash
npm install
npm run dev
```

5. Abre en el navegador la dirección indicada por Vite, normalmente `http://localhost:5173/`.

**Nota:** La tienda consulta `https://fakestoreapi.com/products` en tiempo real. Necesita conexión a Internet para cargar el catálogo.

## 3. Funcionalidades implementadas

- **`/catalogo`**: catálogo con imagen, nombre, categoría y precio en dólares (USD).
- **`/catalogo/carrito`**: carrito con productos agregados, botones para cambiar cantidades, eliminar productos, vaciar carrito y total automático.
- **Búsqueda controlada**: el campo usa `value` y `onChange`; filtra productos por nombre.
- **React Hooks**: `useState` gestiona la búsqueda, el carrito y los estados de la petición.
- **API REST**: `useEffect` + `fetch` cargan los productos al iniciar. Se incluyen pantallas de carga y error, más botón para reintentar.
- **Rutas anidadas**: el `Outlet` del layout muestra las páginas hijas declaradas en `App.jsx`.
- **Props**: `App` transmite el estado y las funciones hacia `Catalogo`, `Carrito`, `ListaProductos`, `ProductoCard` e `ItemCarrito`.
- **Responsive**: diseño Mobile First con Flexbox, CSS Grid y media queries.

## 4. Estructura del proyecto

```text
ejercicio1_catalogo_react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   ├── layouts/
│   │   └── TiendaLayout.jsx
│   ├── pages/
│   │   ├── Catalogo.jsx
│   │   └── NoEncontrada.jsx
│   └── components/
│       ├── BuscadorProducto.jsx
│       ├── ProductoCard.jsx
│       ├── ListaProductos.jsx
│       ├── Carrito.jsx
│       └── ItemCarrito.jsx
└── README.md
```

## 5. Qué capturas tomar para el informe

1. **Catálogo cargado**: abre `/catalogo`; deben mostrarse las tarjetas con imagen, nombre y precio.
2. **Búsqueda controlada**: escribe parte del nombre de un producto; muestra el resultado filtrado.
3. **Agregar al carrito**: pulsa *Agregar +*; muestra que el contador de carrito aumenta.
4. **Ruta anidada**: entra a `/catalogo/carrito`; toma una captura donde se vean la URL, los productos y el total.
5. **Cambio de cantidad**: pulsa `+` o `−`; verifica cómo varían cantidad y subtotal.
6. **Estado de error** (opcional): desactiva temporalmente Internet, recarga el catálogo e intenta obtener los productos; toma captura del aviso de error.

## 6. Validación del código

```bash
npm run build
```

El comando compila el proyecto con Vite y, si termina correctamente, genera la carpeta `dist/`.

> Este trabajo simula un catálogo y un carrito para fines académicos; no procesa pagos reales.
