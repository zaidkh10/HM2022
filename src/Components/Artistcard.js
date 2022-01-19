import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Artistcard = ({artist}) => {
    return (
        <div>
<Card style={{ width: '18rem' }}>
  <Link to={`Artists/${artist.artistId}`}>
  <Card.Img variant="top" src={artist.image}/>
  </Link>
  <Card.Body>
    <Card.Title>{artist.artistName}</Card.Title>
    <Card.Text>
     {artist.collectionCensoredName}
    </Card.Text>
  </Card.Body>
</Card>        </div>
    )
}

export default Artistcard
