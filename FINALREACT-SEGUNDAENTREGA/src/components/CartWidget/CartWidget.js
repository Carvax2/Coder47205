import cart from "./shopping-cart.png";
import {CartContext} from  "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to= "/cart" >
        <img src={cart}/>
        {totalQuantity}
        </Link>
    )
}

export default CartWidget;