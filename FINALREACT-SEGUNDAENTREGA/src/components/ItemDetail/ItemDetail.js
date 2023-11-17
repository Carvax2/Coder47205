import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";


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
      <img src={img} alt="producto" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <p>Categoria: {category}</p>
      <p>Cantidad: {quantityAdded}</p>
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