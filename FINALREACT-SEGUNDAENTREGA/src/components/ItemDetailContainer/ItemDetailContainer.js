import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase-config";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'items', itemId);
        const productSnap = await getDoc(docRef);

        if (productSnap.exists()) {
          const data = productSnap.data();
          const productSelected = { id: doc.id, ...(data || {}) };
          setProduct(productSelected);
        } else {
          console.log("No existe el documento con el ID:", itemId);
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <>
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ItemDetailContainer;