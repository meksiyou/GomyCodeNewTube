import React from 'react'
import { Button,Form,Navbar,FormControl,Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="Nav">
  <Navbar.Brand href="#">NewTube</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        style={{width:"500px"}}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default NavBar
