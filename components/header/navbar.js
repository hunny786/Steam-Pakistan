import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavbarView extends Component {
    render() { 
        return (
            <Fragment>
                <Navbar className='navbar-sticky' bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img className="brand-img" src="../../images/logo-web-large.png" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link className="nav-link active" href="#">
                                    Home
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#">
                                    About
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#">
                                    Tutorials
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#">
                                    Innovation
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#">
                                    Guides
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#">
                                    Practicals
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#">
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}
 
export default NavbarView;