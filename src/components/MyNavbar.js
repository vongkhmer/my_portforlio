import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const MyNavbar = props => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect sticky="top">
      <Container>
        <Navbar.Brand href="#home">A Cambodian Engineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navi-link" href="#profile">profile</Nav.Link>
            <Nav.Link className="navi-link" href="#education">education</Nav.Link>
            <Nav.Link className="navi-link" href="#experience">experience</Nav.Link>
            <Nav.Link className="navi-link" href="#skill">skills</Nav.Link>
            <Nav.Link className="navi-link" href="#achievements">achievements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
