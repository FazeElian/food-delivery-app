// Estilos para este componente
import "../../../assets/css/views/modules/Home/FeaturedProducts.css";

// Componente Item de Producto Destacado
import { FeaturedProductItem } from "./FeaturedProductItem";

// Imágenes - Iconos
    // Producto destacado 1
    import FeaturedProductImage1 from "../../../assets/img/modules/Home/featuredProducts/featuredProduct1.jpg";

    // Producto destacado 2
    import FeaturedProductImage2 from "../../../assets/img/modules/Home/featuredProducts/featuredProduct2.jpg";

    // Producto destacado 3
    import FeaturedProductImage3 from "../../../assets/img/modules/Home/featuredProducts/featuredProduct3.jpg";

    // Producto destacado 4
    import FeaturedProductImage4 from "../../../assets/img/modules/Home/featuredProducts/featuredProduct4.jpg";

const FeaturedProducts = () => {
    return(
        <div className="cont-featured-prods">
            <div className="title-featured-prods">
                <h2>Productos más destacados</h2>
            </div>
            <div className="list-featured-prods">
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage1 }
                    imgAlt = "Hamburguesa Express" 
                    name = "Hamburguesa Express"
                    description = "Extra queso, carne de res, lechuga, pepino tajado, tocineta, papas fritas y salsa de tomate"
                    link = "products/burguer-express"
                />
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage2 }
                    imgAlt = "Hamburguesa QuickBite"  
                    name = "Hamburguesa QuickBite"
                    description = "Queso, pepino y tomate tajado, carne de res y lechuga doble"
                    link = "products/burguer-quickbite"
                />
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage3 }
                    imgAlt = "Hamburguesa Big Flavor"  
                    name = "Hamburguesa Big Flavor"
                    description = "Queso, pepino y tomate tajado, lechuga doble, carne de res y aros de cebolla"
                    link = "products/burguer-big-flavor"
                />
                <FeaturedProductItem
                    imgSrc = { FeaturedProductImage4 }
                    imgAlt = "Hamburguesa Big Flame"  
                    name = "Hamburguesa Big Flame"
                    description = "Doble queso, carne de res, pepino y tomate tajado, tocineta doble y lechuga doble"
                    link = "products/burguer-big-flame"
                />
            </div>
        </div>
    )
}

export { FeaturedProducts };