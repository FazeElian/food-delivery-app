import React from "react";

// Rutas
import { Routes, Route } from "react-router-dom";

// Componentes de vistas
  // Encabezado de página
  import { Header } from "./components/Header";

  // Página Principal 
  import { HomeView } from "./views/HomeView";

  // Productos
  import { ProductsView } from "./views/modules/Products/ProductsView.jsx";

  // Categorías de Productos
  import { CategoriesView } from "./views/modules/Categories/CategoriesView.jsx";

  // Explorar
  import { ExploreView } from "./views/modules/Explore/ExploreView.jsx";

  // Mis Favoritos
  import { MyFavoritesView } from "./views/modules/User/MyFavorites/MyFavoritesView.jsx";

  // Carrito de Compras
  import { ShoppingCartView } from "./views/modules/User/ShoppingCart/ShoppingCartView.jsx";

  // Notificaciones
  import { NotificationsView } from "./views/modules/Notifications/NotificationsView.jsx";

  // Configuración
  import { ConfigurationView } from "./views/modules/User/Configuration/ConfigurationView.jsx";

  // Perfil
  import { ProfileView } from "./views/modules/User/Profile/ProfileView.jsx";

// Estilos generales
import "./assets/css/general-styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Header}> 
          <Route path="/" index Component={HomeView} /> {/* Ruta Página Principal */}
          <Route path="/products/*" Component={ProductsView} /> {/* Ruta Productos */}
          <Route path="/products/categories" Component={CategoriesView}  /> {/* Ruta Categorías de Productos */}
          <Route path="my-favorites" Component={MyFavoritesView} /> {/* Ruta Mis Favoritos */}
          <Route path="shopping-cart" Component={ShoppingCartView} /> {/* Ruta Carrito de Compras */}
          <Route path="/explore" Component={ExploreView} /> {/* Ruta Explorar */}
          <Route path="/notifications" Component={NotificationsView} /> {/* Ruta Notificaciones */}
          <Route path="/user" >
            <Route path="configuration" Component={ConfigurationView} />
            <Route path="profile" Component={ProfileView} />
          </Route>
        </Route>
        
        {/* Ruta Error 404 - Página no encontrada */}
        <Route path="*" element="Página No encontrada" />
      </Routes>
    </>
  );
}

export default App;
