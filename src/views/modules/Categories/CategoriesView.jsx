// Estilos para este componente
import "../../../assets/css/views/modules/Categories/CategoriesView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const CategoriesView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Categorías");

    return(
        <>
            <div>
                <h1>Vista: Categorías</h1>
            </div>
        </>
    )
}

export default CategoriesView;