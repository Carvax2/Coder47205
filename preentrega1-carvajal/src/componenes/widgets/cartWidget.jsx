import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const CartWidget = () => {
  // Aquí puedes agregar el código necesario para interactuar con tu carrito de compras

  return (
    <>
    <img src="/shopping-cart.png" alt="cart" />
    <Button variant="primary">
      Items in cart<Badge bg="secondary">6</Badge>
    </Button>
    </>
      );
};

export default CartWidget;