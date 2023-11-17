import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { id, title, price, quantity } = item;
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };

    return (
        <div>
            <article >
                <header>
                    <h2>{title}</h2>
                </header>
                <section>
                    <p>Precio: ${price}</p>
                </section>
                <section>
                    <p>Cantidad: {quantity}</p>
                </section>
                <footer>
                    <button onClick={handleRemove}>
                        X
                    </button>
                </footer>
            </article>
        </div>
    );
};

export default CartItem;