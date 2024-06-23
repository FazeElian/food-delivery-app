// Estilos para este componente
import "../../../assets/css/views/modules/Home/ProductsList.css";

// Componente Item de Producto Destacado
import { FeaturedProductItem } from "./FeaturedProductItem";

// Links con Scroll
import { Element } from "react-scroll";

// Imágenes - Iconos
    // Producto destacado 1
    import FeaturedProductImage1 from "../../../assets/img/modules/Home/featuredProducts/webp/featuredProduct1.webp";

    // Producto destacado 2
    import FeaturedProductImage2 from "../../../assets/img/modules/Home/featuredProducts/webp/featuredProduct2.webp";

    // Producto destacado 3
    import FeaturedProductImage3 from "../../../assets/img/modules/Home/featuredProducts/webp/featuredProduct3.webp";

    // Producto destacado 4
    import FeaturedProductImage4 from "../../../assets/img/modules/Home/featuredProducts/webp/featuredProduct4.webp";

const FeaturedProducts = () => {
    return(
        <Element className="cont-prods" name="featured-products-section">
            <div className="title-cont-prods">
                <h2>Productos más destacados</h2>
            </div>
            <div className="list-prods">
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage1 }
                    imgAlt = "Hamburguesa Express" 
                    name = "Hamburguesa Express"
                    description = "Extra queso, carne de res, lechuga, pepino tajado, papas fritas y salsa de tomate"
                    link = "products/express-burger"
                    price = "4.500"
                />
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage2 }
                    imgAlt = "Hamburguesa QuickBite"  
                    name = "Hamburguesa QuickBite"
                    description = "Queso, pepino y tomate tajado, carne de res y lechuga doble"
                    link = "products/quickbite-burger"
                    price = "5.600"
                />
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage3 }
                    imgAlt = "Hamburguesa Big Flavor"  
                    name = "Hamburguesa Big Flavor"
                    description = "Queso, pepino y tomate tajado, lechuga doble, carne de res y aros de cebolla"
                    link = "products/big-flavor-burger"
                    price = "6.500"
                />
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage4 }
                    imgAlt = "Hamburguesa Big Flame"  
                    name = "Hamburguesa Big Flame"
                    description = "Doble queso, carne de res, pepino y tomate tajado, tocineta doble y lechuga doble"
                    link = "products/big-flame-burger"
                    price = "8.000"
                />
            </div>
        </Element>
    )
}

export { FeaturedProducts };