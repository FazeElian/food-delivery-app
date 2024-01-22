// Componentes de vista            
    // Banner Hamburguesa
    import { BannerBurger } from "../components/modules/Home/BannerBurger";

    // Productos destacados
    import { FeaturedProducts } from "../components/modules/Home/FeaturedProducts";

    // Botón Scroll a Sección: Productos destacados
    import { SlideButton } from "../components/modules/Home/SlideButton";

    // Ofertas del día
    import { DailyOffers } from "../components/modules/Home/DailyOffersProducts";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../hooks/useDocumentTitle";

const HomeView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Inicio");

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

export default HomeView ;