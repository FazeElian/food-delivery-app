// Link para navegar por rutas
import { Link } from "react-router-dom";

// Estilos para este componente
import "../assets/css/components/Header-UserDropDown.css";

// Imágenes - iconos
    // Icono Notificaciones
    import NotificationsIcon from "../assets/img/icons/header-notifications.png";
        
    // Icono Usuario
    import UserIcon from "../assets/img/icons/header-mobile-user.png";

    // Icono Configuración 
    import ConfigIcon from "../assets/img/icons/header-user-dropdown-configuration.png";

    // Icono Cerrar Sesión
    import LogOutIcon from "../assets/img/icons/header-user-dropdown-log-out.png";


const HeaderUserDropDown = () => {
    return(
        <div className="drop-down-user-item">
            <Link to="/notifications" className="item-drop-down-user"> 
                <img src={NotificationsIcon} alt="" />
                Notificaciones
            </Link>
            <Link to="/user/profile" className="item-drop-down-user"> 
                <img src={UserIcon} alt="" />
                Mi Perfil
            </Link>
            <Link to="/user/configuration" className="item-drop-down-user"> 
                <img src={ConfigIcon} alt="" />
                Configuración
            </Link>
            <Link to="/" className="item-drop-down-user item--log-out-drop-down-user">
                <img src={LogOutIcon} alt="" /> 
                Cerrar Sesión
            </Link>
        </div>
    )
}

export { HeaderUserDropDown };