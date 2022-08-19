import React, {createContext, useEffect, useState} from "react";

const AppContext = createContext()

function AppContextProvider({children}){

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    

    useEffect(() => { 
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then(data => setAllPhotos(data))},[] )
        
        function addToCart(img){
            setCartItems(prevState =>  [...prevState,img ])
        }

        function removeFromCart(id){
            setCartItems(prevItems => prevItems.filter(item => item.id !== id))
        }
       
     
        function toggleFavorite(id){
            const newState = allPhotos.map(obj =>  {
                if(obj.id === id){
                    return {...obj, isFavorite: !obj.isFavorite}
                }
                return obj
            })
            setAllPhotos(newState)
        }
        
        

    return(
        <AppContext.Provider value={{allPhotos,  toggleFavorite, addToCart, cartItems, removeFromCart}}>  {/*allPhotos: allPhotos */}
            {children}
        </AppContext.Provider>
    )
}
export {AppContextProvider,AppContext}