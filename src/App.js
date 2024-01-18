import React, { Suspense } from "react";

import { lazy } from "react";

// Rutas
import { Routes, Route } from "react-router-dom";

// Estilos generales
import "./assets/css/general-styles.css";

// Componentes de vistas
  // Encabezado de página
  import { Header } from "./components/Header";

  // Cargando...
  import { Loading } from "./components/Loading.jsx";

  // Página Principal 
  const HomeView = lazy(() => import("./views/HomeView"));
  
  // Productos
  const ProductsView = lazy(() => import("./views/modules/Products/ProductsView.jsx"));

  // Categorías de Productos
  const CategoriesView = lazy(() => import("./views/modules/Categories/CategoriesView.jsx"));

  // Explorar
  const ExploreView = lazy(() => import("./views/modules/Explore/ExploreView.jsx"));

  // Mis Favoritos
  const MyFavoritesView = lazy(() => import("./views/modules/User/MyFavorites/MyFavoritesView.jsx"));

  // Carrito de Compras
  const ShoppingCartView = lazy(() => import("./views/modules/User/ShoppingCart/ShoppingCartView.jsx"));

  // Notificaciones
  const NotificationsView = lazy(() => import("./views/modules/Notifications/NotificationsView.jsx"));

  // Configuración
  const ConfigurationView = lazy(() => import("./views/modules/User/Configuration/ConfigurationView.jsx"));

  // Perfil
  const ProfileView = lazy(() => import("./views/modules/User/Profile/ProfileView.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}> 
          {/* Ruta Página Principal */}
          <Route 
            path="/" 
            index 
            element={
              <Suspense fallback={<Loading />}>
                <HomeView />
              </Suspense>
            } 
          /> 

          {/* Ruta Productos */}
          <Route 
            path="/products/*" 
            element={
              <Suspense fallback={<Loading />}>
                <ProductsView />
              </Suspense>
            } 
          /> 

          {/* Ruta Categorías de Productos */}
          <Route 
            path="/products/categories" 
            element={
              <Suspense fallback={<Loading />}>
                <CategoriesView />
              </Suspense>
            }
          /> 

          {/* Ruta Mis Favoritos */}
          <Route 
            path="/my-favorites" 
            element={
              <Suspense fallback={<Loading />}>
                <MyFavoritesView />
              </Suspense>
            } 
          /> 

          {/* Ruta Carrito de Compras */}
          <Route 
            path="/shopping-cart" 
            element={
              <Suspense fallback={<Loading />}>
                <ShoppingCartView />
              </Suspense>
            } 
          /> 

          {/* Ruta Explorar */}
          <Route 
            path="/explore" 
            element={
              <Suspense fallback={<Loading />}>
                <ExploreView />
              </Suspense>
            } 
          />

          {/* Ruta Notificaciones */}
          <Route 
            path="/notifications" 
            element={
              <Suspense>
                <NotificationsView />
              </Suspense>
            } 
          />
          
          {/* Rutas para Usuario */}
          <Route path="/user" >
            {/* Ruta Configuración */}
            <Route 
              path="configuration"
              element={
                <Suspense fallback={<Loading />}>
                  <ConfigurationView />
                </Suspense>
              } 
            />

            {/* Ruta Perfil */}
            <Route 
              path="profile" 
              element={
                <Suspense fallback={<Loading />}>
                  <ProfileView />
                </Suspense>
              } 
            />
          </Route>
        </Route>
        
        {/* Ruta Error 404 - Página no encontrada */}
        <Route path="*" element="Página No encontrada" />
      </Routes>
    </>
  );
}

export default App;
