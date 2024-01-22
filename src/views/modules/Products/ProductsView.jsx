// Estilos para este componente
import "../../../assets/css/views/modules/Products/ProductsView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const ProductsView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Nuestros Productos");

    return(
        <>
            <div>
                <h1>Vista: Productos</h1>
            </div>
        </>
    )
}

export default ProductsView;