import React, { useContext, useState } from "react";
import PropTypes from 'prop-types'
import {AppContext} from '../context/Context'


function CartItem({item}) {


    const {removeFromCart} = useContext(AppContext)
    const [className,setClassName]= useState("ri-delete-bin-line")
    return (
        <div>
            <i className={className} 
               onClick={() => removeFromCart(item.id)}
               onMouseEnter={() => setClassName("ri-delete-bin-fill")}
               onMouseLeave={() => setClassName("ri-delete-bin-line")}
            ></i>
            <img alt="" src={item.url} width='130px' height='130px' />
            <p>$5.99</p>
        </div>
    )
}
CartItem.propTypes = {
    item:PropTypes.shape({
        url:PropTypes.string.isRequired
    })
}
export default CartItem