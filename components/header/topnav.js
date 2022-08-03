import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import topnavStyles from './topnav.module.css'

function TopNav () {
    return (
            <Fragment>
                <Navbar className={`${topnavStyles.navbarTopnav} top-nav p-0`} expand="lg">
                    <Container className='justify-content-end'>
                        <Nav className='flex-row align-items-center'>
                            <Nav.Link className={`${topnavStyles.navLink} d-flex align-items-end`} href="https://www.stemclubs.pk/FAQ/FAQs.pdf" target='_blank' rel='referrer'>
                                <img src="../../icons/navicons-faqs.png" />
                                FAQs
                            </Nav.Link>
                            <Nav.Link className={`${topnavStyles.navLink} d-flex align-items-end`} href="./resources" target='_blank' rel='referrer'>
                                <img src="../../icons/navicons-resources.png" />
                                Resources
                            </Nav.Link>
                            <Nav.Link className={`${topnavStyles.navLink} d-flex align-items-end`} href="./Register">
                                <img src="../../icons/navicons-register.png" />
                                Register
                            </Nav.Link>
                            <ul className='user-dropdown me-0'>
                                <li>
                                    <a className={`${topnavStyles.navLink} d-flex align-items-end m-0`} href="./Login">
                                        <img src="../../icons/navicons-login.png" />
                                        Login
                                    </a>
                                    <ul className="dropdown">
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </Nav>
                    </Container>
                </Navbar>
            </Fragment>

    )
}
 
export default TopNav;
