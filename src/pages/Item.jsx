import React from 'react'
import { useProductById } from '../hooks/useProductById'
import ItemListContainerComponent from '../assets/components/ItemListContainerComponent/ItemListContainerComponent';
import { useParams } from 'react-router-dom';

const Item = () => {
  const {id} = useParams();
  const {product} = useProductById(id);

  return (
    <ItemListContainerComponent product={product}/>
  )
}

export default Item;