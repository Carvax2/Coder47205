import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({products}) => {
     return (
        <div className="containerlist">
            {products.map(prod =>  <Item key={prod.id} {...prod} className="itemlist"/>)}
        </div>
     )
}

export default ItemList;

