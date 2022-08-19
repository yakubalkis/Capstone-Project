import React, {useContext, useEffect, useState} from "react"
import{ PropTypes} from 'prop-types'
import {AppContext} from '../context/Context'

function Image({className, img}) {


    const {addToCart, toggleFavorite, cartItems,removeFromCart} = useContext(AppContext)
    const [hovered, setHovered] = useState(false)
    
    function heartIcon(){
        if(img.isFavorite){
            return (
            <i 
            className="ri-heart-fill favorite" 
            onClick={() => {toggleFavorite(img.id)}}> 
            </i>)
        } else if(hovered){
            return   (
            <i 
            onMouseEnter={() => {setHovered(true)}} 
            className="ri-heart-line favorite" 
            onClick={() => {toggleFavorite(img.id)}}> 
            </i>)
        }
    }
    
    function cartIcon(){
        const isInCart = cartItems.some(item => item.id === img.id)
        if(isInCart){
            return (
            <i 
                className="ri-shopping-cart-fill cart"
                onClick={() => {removeFromCart(img.id)}}
                >
                </i>)
        }
        else if(hovered){
            return (
            <i
                onMouseEnter={() => {setHovered(true)}} 
                className="ri-add-circle-line cart"
                onClick={() => {addToCart(img)}}> 
            </i>)
        }
    }

    
    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={() => {setHovered(true)}} 
                 onMouseLeave={() => {setHovered(false)}}
                 src={img.url} 
                 className="image-grid" 
                 alt=""
            />

                {heartIcon()}
                {cartIcon()}
        </div>
    )
}
Image.propTypes= {
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    }),
    className:PropTypes.string
}
export default Image