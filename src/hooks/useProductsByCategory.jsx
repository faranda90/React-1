import React from 'react'
import { getProductsByCategory } from '../services/products'

export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([])

    React.useEffect (() =>{
        getProductsByCategory(category).then((res) =>{
        }).catch ((error) =>{
            setProducts(res.data.products); 
            console.error(error)
        });
    },[category]);



return {products};
}

export default useProductsByCategory;