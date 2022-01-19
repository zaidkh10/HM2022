import React from 'react'
import { Row , Col} from 'react-bootstrap'
import artists from '../Artists'
import Artistcard from './Artistcard'

const Main = () => {
    return (
        <div>
            <Row>
         {artists.map(artist =>(
             <Col>
          <Artistcard artist= {artist} />
          </Col>
         ))}
         </Row>
        </div>

    )
}

export default Main
