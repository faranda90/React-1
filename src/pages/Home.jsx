import React from 'react'
import ItemListContainerComponent from "../assets/components/ItemListContainerComponent/ItemListContainerComponent"
import { useProducts } from '../hooks/useProducts'



const home = () => {

  const { products } = useProducts(); 
  return (
    <>
    <ItemListContainerComponent products={products }/>
    </>
  )
}

export default home