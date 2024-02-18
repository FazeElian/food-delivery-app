// Estilos para este componente
import "../../../assets/css/views/modules/Home/BannerOrderNow.css";

// Imágenes - Iconos
    // Delivery Service
    import DeliveryServiceImage from "../../../assets/img/modules/Home/delivery-service.png";

const BannerOrderNow = () => {
    return(
        <div className="cont-banner-order-now">
            <div className="cont-order-now">
                <h2>Entrega en Línea</h2>
                <h3>Te Quedas en Casa Nosotros Entregamos</h3>
                <button className="btn-order-now">
                    Ordenar Ahora
                </button>
            </div>
            <div className="cont-img-delivery">
                <img src={DeliveryServiceImage} alt="" />
            </div>
        </div>
    )
}

export { BannerOrderNow };