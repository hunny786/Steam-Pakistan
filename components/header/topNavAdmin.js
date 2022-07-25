import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import topNavAdminStyles from './topNavAdmin.module.css'

class TopNavAdmin extends Component {
    render() { 
        return (
            <Fragment>
                <Navbar className={`${topNavAdminStyles.navbarTopnav} p-0`} expand="lg">
                    <Container className='justify-content-end'>
                        <Nav className='flex-row align-items-center'>
                            <Nav.Link className={`${topNavAdminStyles.navLink} d-flex align-items-end`} href="#">
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