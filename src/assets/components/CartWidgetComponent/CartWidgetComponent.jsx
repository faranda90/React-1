import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const CartWidgetComponent = () => {
    const customStyle = {color:"white", fontSize:"1.3rem",marginRigth:"0.5rem"};
  return (
    <div>
        <FontAwesomeIcon icon={faCartArrowDown} style={customStyle} />
        <span style={customStyle}>1</span>
    </div>
  )
}

export default CartWidgetComponent