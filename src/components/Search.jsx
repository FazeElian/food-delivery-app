// Estilos para este componente
import "../assets/css/components/Search.css";

// Imágenes - Iconos
    // Search
    import SearchIcon from "../assets/img/icons/search.png";

const Search = () => {
    return(
        <div className="cont-search">
            <div className="cont-order-by-search">
                <h2>Ordenar Por</h2>
                <select name="order-prods-by" id="">
                    <option value="">Más relevantes</option>
                    <option value="">Precio (Mayor a menor) </option>
                    <option value="">Precio (Menor a mayor) </option>
                    <option value="">A - Z</option>
                </select>
            </div>
            <div className="cont-search-bar-search">
                <div className="cont-search-icon">
                    <img src={SearchIcon} alt="Search Icon" />
                </div>
                <input type="search" className="search-bar" placeholder="Buscar Producto..." />
            </div>
        </div>
    )
}

export { Search };