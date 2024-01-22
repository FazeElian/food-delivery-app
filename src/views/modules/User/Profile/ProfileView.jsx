// Estilos para este componente
import "../../../../assets/css/views/modules/User/ProfileView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";

const ProfileView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Perfil");

    return(
        <>
            <div>
                <h1>Vista: Perfil</h1>
            </div>
        </>
    )
}

export default ProfileView;