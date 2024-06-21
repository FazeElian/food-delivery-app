// Estilos para este componente
import "../../../assets/css/views/modules/Products/ProductsView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

// Componentes para esta vista
    // Búsqueda
    import { Search } from "../../../components/Search";

const ProductsView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Nuestros Productos");

    return(
        <>
            <section className="content-page">
                <div className="cont-content-page">
                    <Search />
                </div>
            </section>
        </>
    )
}

export default ProductsView;