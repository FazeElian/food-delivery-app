// Componentes de vista
    // Encabezado de App
    import { Header } from "../components/Header";
            
    // Banner Hamburguesa
    import { BannerBurger } from "../components/modules/Home/BannerBurger";

const HomeView = () => {
    return(
        <>
            {/* Componente: Encabezado de App */}
            <Header />
            
            {/* Componente: Banner de Hamburguesa */}
            <BannerBurger />
        </>
    )
}

export { HomeView };