import React from "react";

// Rutas
import { Routes, Route } from "react-router-dom";

// Componentes de vistas
  // Encabezado de página
  import { Header } from "./components/Header";

  // Página Principal 
  import { HomeView } from "./views/HomeView";

// Estilos generales
import "./assets/css/general-styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} > {/* Ruta Página Principal */}
          <Route path="/" index element={<HomeView />} />
          <Route path="products/*" /> {/* Ruta Productos */}
          <Route path="products/categories" /> {/* Ruta Categorías de Productos */}
          <Route path="my-favorites" /> {/* Ruta Mis Favoritos */}
          <Route path="shopping-cart" /> {/* Ruta Carrito de Compras */}
          <Route path="explore" /> {/* Ruta Explorar */}
          <Route path="notifications" /> {/* Ruta Notificaciones */}
          <Route path="user/*" >
            <Route path="configuration" />
            <Route path="profile" />
          </Route>
        </Route>
        
        {/* Ruta Error 404 - Página no encontrada */}
        {/* <Route path="*" element={<Error404View />} /> */}
      </Routes>
    </>
  );
}

export default App;
