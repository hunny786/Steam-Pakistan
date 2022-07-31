import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateDistrictUser from './createDistrictUser';
import CreateUser from './createUser';
import SchoolsNotVerified from './schoolsNotVerified';
import SchoolsVerified from './schoolsVerified';
import UpdateDistrictUser from './updateDistrictUser';

class Settings extends Component {
    render() { 
        return (<>
            <Tabs
                defaultActiveKey="home"
                className="mb-3"
                >
                <Tab eventKey="home" title={
                <>
                    <span className="badge">15</span> Create District User
                </>}
                >
                    <CreateDistrictUser></CreateDistrictUser>
                </Tab>
                <Tab eventKey="profile" title={
                <>
                    <span className="badge">17</span> Update District User
                </>}
                >
                    <UpdateDistrictUser></UpdateDistrictUser>
                </Tab>
                <Tab eventKey="createUser" title={
                <>
                    <span className="badge">17</span> Create User
                </>}
                >
                    <CreateUser></CreateUser>   
                </Tab>
                <Tab eventKey="schoolsVerified" title={
                <>
                    <span className="badge">17</span> Schools(Verified)
                </>}
                >
                    <SchoolsVerified></SchoolsVerified>
                </Tab>
                <Tab eventKey="schoolsUnverified" title={
                <>
                    <span className="badge">17</span> Schools(Not Verified)
                </>}
                >
                    <SchoolsNotVerified></SchoolsNotVerified>
                </Tab>
            </Tabs>
        </>);
    }
}
 
export default Settings;