import React from 'react'
import { getProductById } from '../services/productsServices';

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {product, loading};

};