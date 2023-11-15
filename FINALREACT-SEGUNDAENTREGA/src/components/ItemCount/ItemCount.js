import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = ()  => {
        if (stock > 0) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const reset = () => {
        setQuantity(initial);
    }

    return (
        <div>
             <button onClick={decrement}>-</button>
             <span>{quantity}</span>
             <button onClick={increment}>+</button>
             <button onClick={reset}>reset</button>
             <button onClick={() => onAdd(quantity)} disabled= {stock === 0}>add</button>
        </div>
    )
}


export default ItemCount;

