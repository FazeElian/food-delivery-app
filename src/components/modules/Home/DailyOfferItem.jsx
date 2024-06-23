// Navegación entre rutas
import { Link } from "react-router-dom";

const DailyOfferItem = (props) => {
    return(
        <div className="cont-prod">
            <div className="img-prod">
                <Link to={props.link}>
                    <img src={props.imgSrc} alt={props.imgAlt} loading="lazy" />
                </Link>
            </div>
            <div className="info-cont-prod">
                <Link to={props.link}>
                    <h2>{props.name} </h2>
                </Link>
                <p><b>Incluye: </b>{props.description} </p>
                <div className="cont-price-prod">
                    <h3><b>$ </b>{props.price}</h3>
                    <h4><b>$ </b>{props.oldPrice}</h4>
                </div>
            </div>
        </div>
    )
}

export { DailyOfferItem };