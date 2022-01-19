import React from 'react'
import { Nav, Navbar , Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
        
  <Navbar bg="dark" variant="dark">
    <Container>
  <Link to ="/" className='styleButtonnav'> <Navbar.Brand >Navbar</Navbar.Brand>  </Link>
    <Nav className="ml-auto"> 

    <Link to ="/" className='styleButtonnav'>  <Nav> Home </Nav>  </Link>
    <Link to ="/Artists" className='styleButtonnav'>  <Nav>login</Nav> </Link>
    <Link to ="/Contact" className='styleButtonnav'>  <Nav >Contact</Nav> </Link>
    </Nav>
    </Container>
  </Navbar>
          </div>
    )
}

export default Header


