import React from 'react'
import { useProductById } from '../hooks/useProductById'
import ItemDetailsContainer from '../components/ItemDetalContainerComponent/ItemDetailsContainer'
import { useParams } from 'react-router-dom'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'


const Item = () => {
    const { id } = useParams();
    const {products, loading} = useProductById(id);
  
  
    return loading ? <LoaderComponent/> : <ItemDetailsContainer product={products} />;
}

export default Item