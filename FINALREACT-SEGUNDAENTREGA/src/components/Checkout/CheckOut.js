import { useContext, useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../CartContext/CartContext'
import { writeBatch, addDoc, collection, serverTimestamp, doc, getDoc } from 'firebase/firestore'
import { db } from "../../services/firebase-config";
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')

    const { cart, cartTotal, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
    
        try {
            const objOrder = {
                product: cart,
                total: cartTotal(),
                time: serverTimestamp(),
                user: {email, name, phone}
            }
            
            const batch = writeBatch(db);
            const outOfStock = [];
        
            for (const item of cart) {
                const docRef = doc(collection(db, 'items'), item.id);
                const docSnap = await getDoc(docRef);
                const prodts = docSnap.data();
                console.log(prodrs.stock)
        
                if (prodMan.stock - item.quantity < 0) {
                    outOfStock.push(prodts.name);
                } else {
                    batch.update(docRef, {
                        stock: prodts.stock - item.quantity
                    });
                }
            }
        
            if (outOfStock.length > 0) {
                throw new Error(`Hay productos sin disponibilidad: ${outOfStock.join(', ')}`);
            }

            await batch.commit();
        
            const orderRef = await addDoc(collection(db, 'orders'), objOrder);
            setOrderId(orderRef.id);
            clearCart();
        
        } catch (error) {
            console.error('Error al crear tu pedido:', error);
        } 
    }        
    

    if(orderId!==''){
        return <div><h1>Orden creada</h1><p>ID: {orderId}</p><Link to='/' >Compras más productos</Link></div>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout