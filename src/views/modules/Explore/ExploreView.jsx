// Estilos para este componente
import "../../../assets/css/views/modules/Explore/ExploreView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const ExploreView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Explorar");

    return(
        <>
            <div>
                <h1>Vista: Explorar</h1>
            </div>
        </>
    )
}

export default ExploreView;