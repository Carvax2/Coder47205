import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";



const Cart = ()=> {
    const {cart,  clearCart, cartTotal, totalQuantity} = useContext(CartContext);

    if (cart.length ===0){
        return (
            <div>
                <h2>El carrito está vacio</h2>
                <Link to="/">
                    <button>Continuar comprando</button>
                </Link>
            </div>
        );
    }



    return (
        <div>
            <h2>TU CODER CARRITO</h2>
            <div>
            {cart.map (p => <CartItem key={p.id} item={p} cartTotal={cartTotal} {...p}/>)}
            <h3>Total: ${cartTotal}</h3>
            <button onClick={()=>(clearCart())}>Vaciar carrito</button>
            <Link to={'/checkout'}>Checkout</Link>
            </div>
        </div>

    
    );
}


export default Cart;