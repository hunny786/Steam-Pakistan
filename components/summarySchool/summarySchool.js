import React, { Component } from 'react';
import SchoolSummaryTable from '../tables/tableSchoolSummary';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

class SummarySchool extends Component {
    render() { 
        return (
        <>
            <Tabs
                defaultActiveKey="home"
                className="mb-3"
                >
                <Tab eventKey="home" title={
                <>
                    <span className="badge">15</span> Stem Club
                </>}
                >
                    <div className='wrapper-section'>
                        <SchoolSummaryTable></SchoolSummaryTable>
                    </div>
                </Tab>
                <Tab eventKey="profile" title={
                <>
                    <span className="badge">17</span> Stem Safeer
                </>}
                >
                    <div className='wrapper-section'>
                        <SchoolSummaryTable></SchoolSummaryTable>
                    </div>
                </Tab>
                <Tab eventKey="contact" title={
                <>
                    <span className="badge">24</span> Teacher Hub
                </>}
                >
                    <div className='wrapper-section'>
                        <SchoolSummaryTable></SchoolSummaryTable>
                    </div>
                </Tab>
                <Tab eventKey="Others" title={
                <>
                    <span className="badge">08</span> Others
                </>}
                >
                    <div className='wrapper-section'>
                        <SchoolSummaryTable></SchoolSummaryTable>
                    </div>
                </Tab>
            </Tabs>
        </>);
    }
}
 
export default SummarySchool;