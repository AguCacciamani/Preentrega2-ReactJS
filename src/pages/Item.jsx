import React from 'react'
import { useProductById } from '../hooks/useProductById'
import ItemDetailsContainer from '../components/ItemDetalContainerComponent/ItemDetailsContainer'
import { useParams } from 'react-router-dom'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'


const Item = () => {
    const { id } = useParams();
    const {product, loading} = useProductById(id);
  
  
    return loading ? <LoaderComponent/> : <ItemDetailsContainer product={product} />;
}

export default Item