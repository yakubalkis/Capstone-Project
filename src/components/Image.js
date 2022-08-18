import React, {useState} from "react"

function Image({className, img}) {

    const [hovered, setHovered] = useState(false)
   
    const heartIcon = <i onMouseEnter={() => {setHovered(true)}} className="ri-heart-line favorite"></i>
    const cartIcon =  <i onMouseEnter={() => {setHovered(true)}} className="ri-add-circle-line cart"></i>
    
    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={()  => {setHovered(true)}} 
                 onMouseLeave={() => {setHovered(false)}}
                 src={img.url} 
                 className="image-grid" />
                {hovered && heartIcon}
                {hovered && cartIcon}
        </div>
    )
}
export default Image