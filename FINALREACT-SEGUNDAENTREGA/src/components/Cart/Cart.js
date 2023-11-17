import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = ()=> {
    const {cart,  clearCart, cartTotal, totalQuantity} = useContext(CartContext);

    if (totalQuantity ===0){
        return (
            <div className="cart">
                <h2>El carrito está vacio</h2>
                <Link to="/">
                    <button>Continuar comprando</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>TU CODER CARRITO</h2>
            <div>
            {cart.map (p => <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${cartTotal}</h3>
            <button onClick={()=>(clearCart())}>Vaciar carrito</button>
            <Link to={'/checkout'}>Checkout</Link>
            </div>
        </div>

        
    );
}

export default Cart;