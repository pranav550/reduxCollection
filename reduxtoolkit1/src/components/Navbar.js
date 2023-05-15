import React from 'react'
import Nav from 'react-bootstrap/Nav'
const Navbar = () => {
  return (
    <Nav className="justify-content-center" style={{backgroundColor:'lightgrey', paddingTop:'20px', paddingBottom:'20px'}} activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
   
  </Nav>
  )
}

export default Navbar