import React from "react";
import { useProducts } from "../hooks/useProducts";
import ItemListContainerComponent from "../assets/components/ItemListContainerComponent/ItemListContainerComponent";


const home = () => {
  const { products } = useProducts();
  return <ItemListContainerComponent products={products} />;
};

export default home;
