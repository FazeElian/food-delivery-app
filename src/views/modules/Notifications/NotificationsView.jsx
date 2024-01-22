// Estilos para este componente
import "../../../assets/css/views/modules/Notifications/NotificationsView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const NotificationsView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Notificaciones");

    return(
        <>
            <div>
                <h1>Vista: Notificaciones</h1>
            </div>
        </>
    )
}

export default NotificationsView;