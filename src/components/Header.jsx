import { Link } from "react-router-dom";
import { useState } from "react";

// Estilos para este componente
import "../assets/css/components/Header.css";

// Imágenes - Iconos
    // Icono Burguer
    import BurguerIcon from "../assets/img/icons/header-burger.png";

    // Icono favoritos
    import FavoritesIcon from "../assets/img/icons/header-favorites.png";

    // Icono Notificaciones
    import NotificationsIcon from "../assets/img/icons/header-notifications.png";

    // Icono Carrito de Compras
    import ShoppingCartIcon from "../assets/img/icons/header-shopping-cart.png";

    // Icono menú
    import MenuIcon from "../assets/img/icons/header-menu.png";

    // Icono Inicio
    import HomeIcon from "../assets/img/icons/header-mobile-home.png";

    // Icono Productos
    import ProductsIcon from "../assets/img/icons/header-mobile-products.png";
    
    // Icono Categorías
    import CategoriesIcon from "../assets/img/icons/header-mobile-categories.png";

    // Icono Explorar
    import ExploreIcon from "../assets/img/icons/header-mobile-explore.png";

const Header = () => {
    // Valor booleano por default = false -> Menú inactivo
    const [ menu, setMenu ] = useState (false)

    const toggleMenu = () =>{
        setMenu(!menu) // Cambia e stado de toggle a verdadero -> Menú activo
    }

    return(
        <>
            {/* Encabezado */}
            <header className="header">
                <nav className="nav-company">
                    <h1>Food Delivery</h1>
                    <img src={BurguerIcon} alt="" />
                </nav>
                <div className="nav-menu">
                    <Link to="/" className="item-nav-menu">Inicio</Link>
                    <Link to="products" className="item-nav-menu">Nuestros Productos</Link>
                    <Link to="products/categories" className="item-nav-menu">Categorías</Link>
                    <Link to="explore" className="item-nav-menu">Explorar</Link>
                </div>
                <div className="nav-user">
                    <Link to="my-favorites" className="item-nav-user item-nav-user-favorites">
                        <h2>Mis Favoritos</h2>
                        <img src={FavoritesIcon} alt="" />
                    </Link>
                    <Link to="notifications" className="item-notifications-nav-user">
                        <img src={NotificationsIcon} alt="" />
                    </Link>
                    <Link to="shopping-cart" className="item-nav-user item-nav-user-cart">
                        <h2>Carrito</h2>
                        <img src={ShoppingCartIcon} alt="" />
                    </Link>
                    <button className="btn-nav-menu item-nav-user-btn" onClick={toggleMenu}>
                        <h2>Menú</h2>
                        <img src={MenuIcon} alt="" />
                    </button>
                </div>
            </header>

            {/* Header Mobile */}
            <header className={ `header-mobile ${menu ? "active" : ""}` }>
                <nav className="nav-menu-mobile">
                    <Link to="/" className="item-nav-menu"><img src={HomeIcon} alt="Home Icon" /> Inicio</Link>
                    <Link to="products" className="item-nav-menu"><img src={ProductsIcon} alt="Products Icon" /> Nuestros Productos</Link>
                    <Link to="products/categories" className="item-nav-menu"><img src={CategoriesIcon} alt="Categories Icon" /> Categorías</Link>
                    <Link to="explore" className="item-nav-menu"><img src={ExploreIcon} alt="Explore Icon" /> Explorar</Link>
                </nav>
                <nav className="nav-user-mobile">
                    <Link to="notifications" className="item-notifications-nav-user">
                        <h2>Notificaciones</h2>
                        <img src={NotificationsIcon} alt="" />
                    </Link>
                    <Link to="shopping-cart" className="item-nav-menu item-nav-user-cart">
                        <h2>Carrito de Compras</h2>
                        <img src={ShoppingCartIcon} alt="" />
                    </Link>
                    <Link to="my-favorites" className="item-nav-menu item-nav-user-favorites">
                        <h2>Mis Favoritos</h2>
                        <img src={FavoritesIcon} alt="" />
                    </Link>
                </nav>
            </header>
        </>
    )
}

export { Header };