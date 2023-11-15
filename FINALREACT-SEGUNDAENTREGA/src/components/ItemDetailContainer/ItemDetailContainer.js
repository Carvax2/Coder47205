import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase-config";

const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const docRef = doc(db, 'items', itemId);

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          console.log(data)
          const productSelected = { id: response.id, ...(data || {}) };
          setProduct(productSelected);
        } else {
          console.log("No existe el documento con el ID:", itemId);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el documento:", error);
      });
  }, [itemId]);

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;

