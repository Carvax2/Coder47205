import { Link } from "react-router-dom";
import "./item.css"

const Item = ({id, title, img, price, stock}) => {

    return (
        <article className="article">
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                 <img src={img} />
            </picture>
            <section>
                <p>Precio hoy: ${price}</p>
                <p>Stock: {stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;