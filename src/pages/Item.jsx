import React from 'react'
import { useProductById } from '../hooks/useProductById'
import ItemDetailContainerComponent from "../assets/components/ItemDetailContainerComponent/ItemDetailContainerComponent";
import { useParams } from 'react-router-dom';

const Item = () => {
  const {id} = useParams()
  const {product} = useProductById(id);

  return (
    <ItemDetailContainerComponent product={product}/>
  )
}

export default Item;