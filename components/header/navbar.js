import React, { Fragment, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Link from 'next/dist/client/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarView = () => {
    return ( 
        <Fragment>
            <Navbar className='navbar-sticky' bg="light" expand="lg">
                <Container>
                    <Link href="./" passHref>
                        <Navbar.Brand href=""><img className="brand-img" src="../../images/logo-web-large.png" /></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                        <Nav>
                            <Link href="./" passHref>
                                <Nav.Link>
                                    Home
                                </Nav.Link>
                            </Link>
                            <Nav.Link href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link href="#tutorials">
                                Tutorials
                            </Nav.Link>
                            <Nav.Link href="#innovation">
                                Innovation
                            </Nav.Link>
                            <Nav.Link href="#guides">
                                Guides
                            </Nav.Link>
                            <Nav.Link href="#practicals">
                                Practicals
                            </Nav.Link>
                            <Nav.Link href="#contact">
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
 