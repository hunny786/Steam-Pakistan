import React from "react";
import TopNavAdmin from "../../components/header/topNavAdmin";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SchoolReport from "../../components/schoolReport/schoolReport";
import AdminSideNavSchool from "../../components/adminSideNav/adminSideNavSchool";
import FilterModal from "../../components/popups/Filter";

function SchoolDashboard() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNavSchool></AdminSideNavSchool>
            </aside>
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="offset-9 col-3">
                            <div className="input-group">
                                <button className="btn btn-search" type="button"><img src="../icons/quick-search.png" /></button>
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="" />
                                <button  onClick={() => setModalShow(true)} className="btn btn-filter" type="button"><img src="../icons/filter.png" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs
                    defaultActiveKey="home"
                    className="mb-3"
                    >
                    <Tab eventKey="home" title={
                    <>
                        <span className="badge">15</span> Stem Club
                    </>}
                    >
                    <SchoolReport></SchoolReport>
                    </Tab>
                    <Tab eventKey="profile" title={
                    <>
                        <span className="badge">17</span> Stem Safeer
                    </>}
                    >
                    <SchoolReport></SchoolReport>
                    </Tab>
                    <Tab eventKey="contact" title={
                    <>
                        <span className="badge">24</span> Teacher Hub
                    </>}
                    >
                    <SchoolReport></SchoolReport>
                    </Tab>
                    <Tab eventKey="Others" title={
                    <>
                        <span className="badge">08</span> Others
                    </>}
                    >
                    <SchoolReport></SchoolReport>
                    </Tab>
                </Tabs>
            </div>
            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
            </FilterModal>
        </>
    )
} 

export default SchoolDashboard;