// Estilos para este componente
import "../../../assets/css/views/modules/Home/ProductsList.css";

// Componente Item de Oferta del día
import { DailyOfferItem } from "./DailyOfferItem";

// Imágenes - Iconos
    // Oferta del día 1
    import DailyOffer1 from "../../../assets/img/modules/Home/dailyOffers/webp/dailyOffer1.webp";

    // Oferta del día 2
    import DailyOffer2 from "../../../assets/img/modules/Home/dailyOffers/webp/dailyOffer2.webp";

    // Oferta del día 3
    import DailyOffer3 from "../../../assets/img/modules/Home/dailyOffers/webp/dailyOffer3.webp";

    // Oferta del día 4
    import DailyOffer4 from "../../../assets/img/modules/Home/dailyOffers/webp/dailyOffer4.webp";

const DailyOffers = () => {
    return(
        <div className="cont-prods">
            <div className="title-featured-prods title-daily-offers">
                <h2>Ofertas del día</h2>
            </div>
            <div className="list-prods">
                <DailyOfferItem
                    imgSrc = { DailyOffer1 }
                    imgAlt = "Hamburguesa Express" 
                    name = "Hamburguesa Express"
                    description = "Extra queso, carne de res, lechuga, pepino tajado, papas fritas y salsa de tomate"
                    link = "products/burguer-express"
                    price = "4.500"
                    oldPrice = "5.200"
                />
                <DailyOfferItem
                    imgSrc = { DailyOffer2 }
                    imgAlt = "Hamburguesa ZoomBite"  
                    name = "Hamburguesa ZoomBite"
                    description = "Queso, carne de res, tocineta, tortilla doble cortada y salsa tártara"
                    link = "products/burguer-zoom-bite"
                    price = "5.600"
                    oldPrice = "7.000"
                />
                <DailyOfferItem
                    imgSrc = { DailyOffer3 }
                    imgAlt = "Hamburguesa FlashFeast"  
                    name = "Hamburguesa FlashFeast"
                    description = "Pan semi-integral, Queso, carne de res, tocineta doble y salsa BBQQ"
                    link = "products/burguer-flash-feast"
                    price = "5.500"
                    oldPrice = "6.400"
                />
                <DailyOfferItem
                    imgSrc = { DailyOffer4 }
                    imgAlt = "Hamburguesa RushRapture"  
                    name = "Hamburguesa RushRapture"
                    description = "Queso, carne de res, tomate y cebolla roja tajado, lechuga y tocineta"
                    link = "products/burguer-rush-rapture"
                    price = "5.200"
                    oldPrice = "6.000"
                />
            </div>
        </div>
    )
}

export { DailyOffers };