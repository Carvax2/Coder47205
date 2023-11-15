import cart from "./shopping-cart.png";


const CartWidget = () => {

    const contador = 0;
    return (
        <div>
        <img src={cart} />
        {contador}
        </div>
    )
}

export default CartWidget;