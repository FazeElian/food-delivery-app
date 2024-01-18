// Navegación entre rutas
import { Link } from "react-router-dom";

const FeaturedProductItem = (props) => {
    return(
        <div className="featured-prod">
            <div className="img-featured-prod">
                <Link to={props.link}>
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </Link>
            </div>
            <div className="info-featured-prod">
                <Link to={props.link}>
                    <h2>{props.name} </h2>
                </Link>
                <p><b>Incluye: </b>{props.description} </p>
                <h3><b>$ </b>{props.price}</h3>
            </div>
        </div>
    )
}

export { FeaturedProductItem };