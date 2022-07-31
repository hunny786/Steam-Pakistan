import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import topNavAdminStyles from './topNavAdmin.module.css'

class TopNavAdmin extends Component {
    render() { 
        return (
            <Fragment>
                <Navbar className={`${topNavAdminStyles.navbarTopnav} top-nav-admin p-0`} expand="lg">
                    <Container className='justify-content-center justify-content-lg-between' fluid>
                        <Navbar.Brand href=""><img className="brand-img me-2" src="../../icons/nav-schools-active.png" />School Reports</Navbar.Brand>
                        <Nav className='flex-row align-items-center'>
                            <Nav.Link className={`${topNavAdminStyles.navLink} d-flex align-items-end`} href="http://localhost:3000/resources" target='_blank' rel='noreferrer'>
                                <img src="../../icons/quick-resources.png" />
                                Resources
                            </Nav.Link>
                            <ul className='user-dropdown me-0'>
                                <li>
                                    <a className={`${topNavAdminStyles.navLink} d-flex align-items-end m-0`} href="#">
                                        <img src="../../icons/quick-login.png" />
                                        Adeel
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
        );
    }
}
 
export default TopNavAdmin;