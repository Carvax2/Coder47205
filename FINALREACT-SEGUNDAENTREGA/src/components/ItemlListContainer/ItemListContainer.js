import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { db } from "../../services/firebase-config";

const ItemListContainer = ({greetings}) => {
    

     const [products, setProducts] = useState([]);
     const {categoryId} = useParams()
 
     useEffect(() => {
          const collectionRef = categoryId ? query(collection(db,'items'), where ('category', '==', categoryId)) : collection(db,'items')
          
          getDocs(collectionRef)
          .then(response => {
            const  productsAdapted = response.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(productsAdapted)
          })
          .catch(error => {
            console.log(error)
          })
     }, [])

     return (
          <div>
               <h2>{greetings}</h2>
               <ItemList products={products} />
          </div>
     );
}

export default ItemListContainer;


