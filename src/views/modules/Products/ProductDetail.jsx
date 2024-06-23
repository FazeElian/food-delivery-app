// Navegación entre rutas
import { Link } from "react-router-dom";

// Estilos para este Componente
import "../../../assets/css/views/modules/Products/ProductDetail.css";

// Uso de params para envío de parámetros entre rutas
import { useParams } from "react-router-dom";

// Lista de Productos
import ProductsList from "../../../components/modules/Products/ProductsList";

// Imágenes - Iconos
    // Left Arrow Icon
    import LeftArrowIcon from "../../../assets/img/icons/left-arrow-come-back.png";

    // Cart Icon
    import CartIcon from "../../../assets/img/icons/cart.png";

const ProductDetail = () => {
    let { slug } = useParams();
    const product = ProductsList.find(product => String(product.slug) === slug);

    return (
        <>
            <section className="content-page">
                <div className="cont-content-page">
                    <section className="sect-detail-prod" key={product.id}>
                        <div className="cont-route-detail-prod">
                            <h2><Link to="/">Inicio</Link></h2>
                            <h3>/</h3> 
                            <h2><Link to="/products">Nuestros Productos</Link></h2>
                            <h3>/</h3> 
                            <h2><Link to={`/products/${product.slug}`}>{product.name}</Link></h2>
                        </div>
                        <div className="cont-detail-prod">
                            <div className="cont-img-prod--detail">
                                <img src={product.imgSrc} alt={product.name} />
                            </div>
                            <div className="cont-content-prod--detail">
                                <h1>{product.name}</h1>

                                <br />
                                <p><b>Incluye: </b>{product.description}</p>
                                <h2>${product.price}</h2>

                                {/* <div className="cont-amount-prod--detail">

                                </div> */}

                                <button className="btn-prod--detail btn-buy-now--detail">
                                    <Link to="buy/">
                                        Ordenar Ahora
                                    </Link>
                                </button>
                                <button className="btn-prod--detail btn-add-to-cart--detail">
                                    <img src={CartIcon} alt="Cart Icon" />
                                    <Link to="/shopping-cart">
                                        Añadir al Carrito
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="cont-btn-come-back-detail-prod">
                            <button className="btn-come-back-detail-prod">
                                <Link to="/products">
                                    <img src={LeftArrowIcon} alt="Come Back Icon" />
                                    Volver
                                </Link>
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ProductDetail;