import React, {createContext, useEffect, useState} from "react";

const AppContext = createContext()

function AppContextProvider({children}){

    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => { 
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then(data => setAllPhotos(data))},[] )
    

        console.log(allPhotos)

    return(
        <AppContext.Provider value={{allPhotos}}>  {/*allPhotos: allPhotos */}
            {children}
        </AppContext.Provider>
    )
}
export {AppContextProvider,AppContext}