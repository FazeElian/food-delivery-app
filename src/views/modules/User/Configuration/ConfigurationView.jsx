// Estilos para este componente
import "../../../../assets/css/views/modules/User/ConfigurationView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";

const ConfigurationView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Configuración");

    return(
        <>
            <div>
                <h1>Vista: Configuración</h1>
            </div>
        </>
    )
}

export default ConfigurationView;