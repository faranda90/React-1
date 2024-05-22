import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
  
  const customStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color: "white",
    fontsize:"15 rem",
    margin:"auto",
    with:"100vh",
    height:"80vh",

  }
  
    return (

    <div style={customStyle}>{greeting} </div>
  )
}

export default ItemListContainerComponent