import React, { Fragment, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarView = () => {
    return ( 
        <Fragment>
            <Navbar className='navbar-sticky' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className="brand-img" src="../../images/logo-web-large.png" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link className="nav-link active" href="#banner">
                                Home
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="#tutorials">
                                Tutorials
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="#innovation">
                                Innovation
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="#guides">
                                Guides
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="#practicals">
                                Practicals
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment> 
    );
}
 
export default NavbarView;
 