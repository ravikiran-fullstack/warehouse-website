import React from 'react'

const GalleryImage = ({imageUrl,alt}) => {
    return(
        <img className="gallery-thumbnail" src={imageUrl} alt={alt} />
      )
    }


export default GalleryImage
