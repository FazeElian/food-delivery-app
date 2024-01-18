// Componentes de vista            
    // Banner Hamburguesa
    import { BannerBurger } from "../components/modules/Home/BannerBurger";

    // Productos destacados
    import { FeaturedProducts } from "../components/modules/Home/FeaturedProducts";

    // Botón Scroll a Sección: Productos destacados
    import { SlideButton } from "../components/modules/Home/SlideButton";

    // Ofertas del día
    import { DailyOffers } from "../components/modules/Home/DailyOffersProducts";

const HomeView = () => {
    return(
        <>            
            {/* Componente: Banner de Hamburguesa */}
            <BannerBurger />

            {/* Componente: Botón para ir a Sección de productos destacados */}
            <SlideButton />

            {/* Componente: Productos destacados */}
            <FeaturedProducts />

            {/* Componente: Ofertas del día */}
            <DailyOffers />
        </>
    )
}

export { HomeView };