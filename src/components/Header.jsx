import { Link } from "react-router-dom";

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

const Header = () => {
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
                    <Link to="notifications" className="item-img-nav-user">
                        <img src={NotificationsIcon} alt="" />
                    </Link>
                    <Link to="shopping-cart" className="item-nav-user item-nav-user-cart">
                        <h2>Carrito</h2>
                        <img src={ShoppingCartIcon} alt="" />
                    </Link>
                    <button className="btn-nav-menu item-nav-user-btn">
                        <h2>Menú</h2>
                        <img src={MenuIcon} alt="" />
                    </button>
                </div>
            </header>
        </>
    )
}

export { Header };