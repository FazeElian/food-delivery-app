// Componentes de vista            
    // Banner Hamburguesa
    import { BannerBurger } from "../components/modules/Home/BannerBurger";

    // Productos destacados
    import { FeaturedProducts } from "../components/modules/Home/FeaturedProducts";
    import { SlideButton } from "../components/modules/Home/SlideButton";

const HomeView = () => {
    return(
        <>            
            {/* Componente: Banner de Hamburguesa */}
            <BannerBurger />

            {/* Componente: Botón para ir a Sección de productos destacados */}
            <SlideButton />

            {/* Componente: Productos destacados */}
            <FeaturedProducts />
        </>
    )
}

export { HomeView };