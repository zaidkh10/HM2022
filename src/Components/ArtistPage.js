import React from 'react'
import { useParams } from 'react-router-dom'
import artists from '../Artists'
import { Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import '../App.css'

const ArtistPage = () => {
   const params = useParams()    
   const artist = artists.find(n => n.artistId === params.id)   
   const location = useLocation()
   return( 
       
       <div>
        
      <h1>{location.state.artistName}</h1>
      <img src={location.state.image} className='Imagestyle'/>
      <a href={location.state.artistViewUrl} target= "_blank" className='Artistlink'> Artist Link</a>
      <h3 className='description'>{location.state.collectionCensoredName}</h3>
        </div>
    )
}

export default ArtistPage
