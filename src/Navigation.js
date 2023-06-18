import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation(props) {
    return(
        <>
            <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand href="#home">Shop for Bags</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Shop" id="basic-nav-dropdown">                        
                        <NavDropdown.Item href="#all_products">All Products</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#popular_items">Popular Items</NavDropdown.Item>
                        <NavDropdown.Item href="#new_arrivals">New Arrivals</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{props.count}</span>
                        </button>
                    </form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>   
    )
}
export default Navigation