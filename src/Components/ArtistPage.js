import React from 'react'
import { useParams } from 'react-router-dom'
import artists from '../Artists'
import { Image } from 'react-bootstrap'
const ArtistPage = () => {
   const params = useParams()    
   const artist = artists.find(n => n.artistId === params.id)   
   return( 
       
       <div>
     <Image>{artist.image}</Image>
        </div>
    )
}

export default ArtistPage
