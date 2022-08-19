import React, { useContext, useEffect, useState } from "react"
import {AppContext} from '../context/Context'
import CartItem from "../components/CartItem"

function Cart() {
    
    const {cartItems, removeAllFromCart} = useContext(AppContext)
   
    const [textBtn,setTextBtn] = useState('Place Order')
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item}  />
    })

    function placeOrder(){
        setTextBtn('Ordering...')
        setTimeout(() => {
            console.log('Order Placed!')
            setTextBtn('Place Order')
            removeAllFromCart()
        },3000)
    }
  


    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            <div className="order-button">
                {cartItems.length > 0 && <button onClick={placeOrder}>{textBtn}</button>}
            </div>
        </main>
    )
}

export default Cart