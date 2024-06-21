import React from "react";
import { getMensShirts, getMensShoes, getSportAccessories, getWomensDresses, getWomensShoes } from "../services/productsServices";


export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () => {
        try {
            const [mensShirts, mensShoes, sportAccessories, womensDresses, womensShoes] = await Promise.all([
                getMensShirts(),
                getMensShoes(),
                getSportAccessories(),
                getWomensDresses(),
                getWomensShoes()
            ]);
            const allProducts = [
                ...mensShirts.data.products,
                ...mensShoes.data.products,
                ...sportAccessories.data.products,
                ...womensDresses.data.products,
                ...womensShoes.data.products
            ];

            setProducts(allProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        };
    };

    fetchProducts();
  }, []);

  return { products, loading };
};