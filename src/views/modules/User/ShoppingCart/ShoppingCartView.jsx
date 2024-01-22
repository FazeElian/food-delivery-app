// Estilos para este componente
import "../../../../assets/css/views/modules/User/ShoppingCartView.css";

// Hooks
    // Título de Vista
    import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";

const ShoppingCartView = () => {
    // Título de vista usando el método del Custom Hook useDocumentTitle()
    useDocumentTitle("Carrito de Compras");

    return(
        <>
            <div>
                <h1>Vista: Carrito de Compras</h1>
            </div>
        </>
    )
}

export default ShoppingCartView;