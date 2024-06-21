import React from 'react'
import { getProductById } from '../services/productsServices';

export const useProductById = (id) => {
  const [products, setProducts] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    getProductById(id)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {products, loading};

};