import React from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const db = getFirestore();
        const productosCollection = collection(db, "productos");
        const productsQuery = query(
            productosCollection,
            where("category", "==", category)
        );

        getDocs(productsQuery)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [category]);

    return { products };

}

