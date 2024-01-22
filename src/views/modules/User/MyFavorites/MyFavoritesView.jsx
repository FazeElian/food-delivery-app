// Estilos para este componente
import "../../../../assets/css/views/modules/User/MyFavoritesView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";

const MyFavoritesView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Mis Favoritos");
    
    return(
        <>
            <div>
                <h1>Vista: Mis Favoritos</h1>
            </div>
        </>
    )
}

export default MyFavoritesView;