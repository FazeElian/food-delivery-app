// Navegación entre rutas
import { Link } from "react-router-dom";

// Estilos para este componente
import "../assets/css/components/Footer.css";

// Imágenes - Iconos
    // Icono Burger
    import BurgerIcon from "../assets/img/icons/header-burger.png";
    
    // Icono Instagram
    import InstagramIcon from "../assets/img/icons/footer-instagram.png";

    // Icono Facebook
    import FacebookIcon from "../assets/img/icons/footer-facebook.png";

    // Icono Twitter
    import TwitterIcon from "../assets/img/icons/footer-twitter.png";

const Footer = () => {
    return (
        <>
            <div className="block-pre-footer" />
            <footer className="footer">
                <div className="footer-content">
                    <div className="cont-footer-content">
                        <div className="footer-cont-company">
                            <h1>Food Delivery</h1>
                            <img src={BurgerIcon} alt="Burger Icon" />
                        </div>
                        <div className="footer-cont-lists">
                            <ul className="footer-item-cont-lists">
                                <li className="footer-first-item-list">Contáctanos</li>
                                <li className="footer-socia-media-item"><Link to="https://www.facebook.com/?locale=es_LA"><img src={FacebookIcon} alt="FacebookIconn" />facebook_user</Link></li>
                                <li className="footer-socia-media-item"><Link to="https://www.instagram.com/"><img src={InstagramIcon} alt="Instagram Icon" />@instagram_user</Link></li>
                                <li className="footer-socia-media-item"><Link to="https://x.com/"><img src={TwitterIcon} alt="Twitter Icon" />@twitter_user</Link></li>
                            </ul>
                            <ul className="footer-item-cont-lists">
                                <li className="footer-first-item-list">Ayuda</li>
                                <li><Link to="/">Preguntas Frecuentes</Link></li>
                                <li><Link to="/">Factura Electrónica</Link></li>
                                <li><Link to="/">Soporte Técnico</Link></li>
                                <li><Link to="/">Trabaja con Nosotros</Link></li>
                            </ul>
                            <ul className="footer-item-cont-lists">
                                <li className="footer-first-item-list">Mi Pedido</li>
                                <li><Link to="/">Estado del Pedido</Link></li>
                                <li><Link to="/">Rastrear mi Pedido</Link></li>
                                <li><Link to="/">Historial de Pedidos</Link></li>
                                <li><Link to="/">Devoluciones y Reembolsos</Link></li>
                            </ul>
                        </div>     
                    </div>     
                    <div className="cont-footer-rights">
                        © All rights reserved
                        <div className="cont-developer-footer-rights">
                            Project developed by <Link to="https://github.com/FazeElian">Elián Ibarra</Link>
                        </div>
                    </div>       
                </div>
            </footer>
        </>
    )
}

export { Footer };