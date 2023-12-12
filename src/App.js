import React from "react";

// Rutas
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" /> {/* Ruta Página Principal */}
        <Route path="products/*" /> {/* Ruta Productos */}
        <Route path="products/categories" /> {/* Ruta Categorías de Productos */}
        <Route path="my-favorites" /> {/* Ruta Mis Favoritos */}
        <Route path="shopping-cart" /> {/* Ruta Carrito de Compras */}
        <Route path="explore" /> {/* Ruta Explorar */}
        <Route path="notifications" /> {/* Ruta Notificaciones */}
        <Route path="profile" /> {/* Ruta Perfil */}
      </Route>
      
      {/* Ruta Error 404 - Página no encontrada */}
      {/* <Route path="*" element={<Error404View />} /> */}
    </Routes>
  );
}

export default App;
