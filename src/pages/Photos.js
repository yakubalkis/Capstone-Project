import React, {useContext} from "react"
import { getClass } from "../utils"
import Image from '../components/Image'
import {AppContext} from '../context/Context'

function Photos() {

    const {allPhotos} = useContext(AppContext)
    const imageElements = allPhotos.map((img,i) => (
                        <Image key={img.id} img={img} className={getClass(i)}/>))
    
    return (
        
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos