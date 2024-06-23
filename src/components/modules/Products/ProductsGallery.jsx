// Navegación entre rutas
import { Link } from "react-router-dom";

// Estilos para este componente
import "../../../assets/css/views/modules/Products/ProductsGallery.css";

// Lista de Productos
import ProductsList from "./ProductsList";

const ProductsGallery = () => {
    return (
        <section className="sect-prods--gallery">
            {ProductsList.map (product => (
                <div className="cont-prod--gallery" key={product.id}>
                    <div className="img-prod--gallery">
                        <Link to={`/products/${product.slug}`}>
                            <img src={product.imgSrc} alt={product.name} loading="lazy" />
                        </Link>
                    </div>
                    <div className="info-cont-prod--gallery">
                        <Link to={`/products/${product.slug}`}>
                            <h2>{product.name}</h2>
                        </Link>
                        <p><b>Incluye: </b>{product.description} </p>
                        <h3><b>$ </b>{product.price}</h3>
                    </div>
                </div>
            ))}
        </section>
    )
}

export { ProductsGallery };