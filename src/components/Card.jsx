import { Button } from "react-bootstrap";

const Card = ({imageSrc, title, description}) => {
    return (
        <div className="tarjeta">
            <img className="cardImg" src={imageSrc} alt=""/>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button>Ver Modelo</Button>
            </div>
        </div>
    )
}

export default Card;