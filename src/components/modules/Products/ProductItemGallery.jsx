import { Link } from "react-router-dom";

// Estilos para este componente
import "../../../assets/css/views/modules/Products/ProductsGallery.css";

import productImage from "../../../assets/img/modules/Home/featuredProducts/featuredProduct1.jpg";

const ProductItemGallery = () => {
    return (
        <div className="cont-prod--gallery">
            <div className="img-prod--gallery">
                <Link to="/">
                    <img src={productImage} alt="Product" />
                </Link>
            </div>
            <div className="info-cont-prod--gallery">
                <Link to="/">
                    <h2>Producto</h2>
                </Link>
                <p><b>Incluye: </b>Descripción </p>
                <h3><b>$ </b>1</h3>
            </div>
        </div>
    )
}

export { ProductItemGallery };