import React, { Component } from 'react';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import topnavStyles from './topnav.module.css'

class TopNav extends Component {
    render() { 
        return (
            <Fragment>
                <Navbar className={topnavStyles.navbarTopnav} expand="lg">
                    <Container className='justify-content-end'>
                        <Nav className='flex-row align-items-center'>
                            <Nav.Link className={`${topnavStyles.navLink} d-flex align-items-end`} href="#">
                                <img src="../../icons/navicons-faqs.png" />
                                FAQs
                            </Nav.Link>
                            <Nav.Link className={`${topnavStyles.navLink} d-flex align-items-end`} href="#">
                                <img src="../../icons/navicons-resources.png" />
                                Resources
                            </Nav.Link>
                            <Nav.Link className={`${topnavStyles.navLink} d-flex align-items-end`} href="#">
                                <img src="../../icons/navicons-register.png" />
                                Register
                            </Nav.Link>
                            <Nav.Link className={`${topnavStyles.navLink} d-flex align-items-end user-dropdown me-0`} href="#">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="../../icons/navicons-login.png" />
                                            Adeel
                                        </a>
                                        <ul className="dropdown">
                                            <li><a href="#">Sub-1</a></li>
                                            <li><a href="#">Sub-2</a></li>
                                            <li><a href="#">Sub-3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Fragment>

            )
    }
}
 
export default TopNav;