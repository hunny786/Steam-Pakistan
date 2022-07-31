import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PedagogyGuide from './pedagogyGuide';
import PedagogyVideo from './pedagogyVideo';

class Pedagogy extends Component {
    render() { 
        return (<>
            <Tabs
                defaultActiveKey="home"
                className="mb-3"
                >
                <Tab eventKey="home" title={
                <>
                    <span className="badge">15</span> Padagogy Video
                </>}
                >
                    <PedagogyVideo></PedagogyVideo>
                </Tab>
                <Tab eventKey="profile" title={
                <>
                    <span className="badge">17</span> Pedagogy Guide
                </>}
                >
                    <PedagogyGuide></PedagogyGuide>
                </Tab>
            </Tabs>
        </>);
    }
}
 
export default Pedagogy;