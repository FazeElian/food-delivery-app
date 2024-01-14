// Componentes de vista            
    // Banner Hamburguesa
    import { BannerBurger } from "../components/modules/Home/BannerBurger";

    // Productos destacados
    import { FeaturedProducts } from "../components/modules/Home/FeaturedProducts";

const HomeView = () => {
    return(
        <>            
            {/* Componente: Banner de Hamburguesa */}
            <BannerBurger />

            {/* Componente: Productos destacados */}
            <FeaturedProducts />
        </>
    )
}

export { HomeView };