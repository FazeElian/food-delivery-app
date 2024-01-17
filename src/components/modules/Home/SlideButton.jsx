// Estilos para este componente
import "../../../assets/css/views/modules/Home/SlideButton.css";

// Navegación por scroll
import { Link } from "react-scroll";

// Imágenes - Iconos
    // Flecha doble hacia abajo
    import DoubleArrowBottomScroll from "../../../assets/img/icons/double-arrow-buttom-slide.png";

const SlideButton = () => {
    return(
        <div className="cont-slide-button">
            <Link
                activeClass="active"
                to="featured-products-section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                <button className="btn-scroll-featured-prods">
                    <img src={DoubleArrowBottomScroll} alt="Flecha hacia abajo Scroll" />
                </button>
            </Link>
        </div>
    )
}

export { SlideButton };