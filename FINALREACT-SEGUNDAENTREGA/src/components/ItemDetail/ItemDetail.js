import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../CartContext/CartContext";
import { useParams } from "react-router-dom";


const ItemDetail = ({id, title, img, description, price, category }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {id, title, price}
    addItem(item, quantity)
  };

  return (
    <article>
      <img src={img} alt="product" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Quantity: {quantityAdded}</p>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart">Terminar compra</Link>
        ) : (
          <ItemCount initial={1} stock={20} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;