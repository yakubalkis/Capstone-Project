import React, { useContext } from "react";
import {AppContext} from '../context/Context'


function CartItem({item}) {

    const {removeFromCart} = useContext(AppContext)
    return (
        <div>
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)} ></i>
            <img alt="" src={item.url} width='130px'  />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem