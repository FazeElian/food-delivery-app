// Navegación entre rutas
// import { Link } from "react-router-dom";

// Estilos para este componente
import "../../../assets/css/views/modules/Products/ProductsGallery.css";

// import productImage fffrom "../../../assets/img/modules/Home/featuredProducts/featuredProduct1.jpg";
import { ProductItemGallery } from "./ProductItemGallery";

// Lista de Productos - JSON


const ProductsGallery = () => {
    return (
        <section className="sect-prods--gallery">
            <ProductItemGallery />
            <ProductItemGallery />
            <ProductItemGallery />
            <ProductItemGallery />
            <ProductItemGallery />
            <ProductItemGallery />
            <ProductItemGallery />
            <ProductItemGallery />
        </section>
    )
}

export { ProductsGallery };