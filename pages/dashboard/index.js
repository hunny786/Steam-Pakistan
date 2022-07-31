import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashboardReport from "../../components/dashboardReport/dashboardReport";

function AdminPage() {
    return (
        <Fragment>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNav></AdminSideNav>
            </aside>
            <div className="wrapper">
                <div className="row">
                    <div className="offset-lg-9 col-12 col-lg-3 mb-3 mb-lg-0">
                        <div className="input-group">
                            <button className="btn btn-search" type="button"><img src="../icons/quick-search.png" /></button>
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="" />
                            <button onClick={() => setModalShow(true)} className="btn btn-filter" type="button"><img src="../icons/filter.png" /></button>
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
                    <DashboardReport></DashboardReport>
                    </Tab>
                    <Tab eventKey="profile" title={
                    <>
                        <span className="badge">17</span> Stem Safeer
                    </>}
                    >
                    <DashboardReport></DashboardReport>
                    </Tab>
                    <Tab eventKey="contact" title={
                    <>
                        <span className="badge">24</span> Teacher Hub
                    </>}
                    >
                    <DashboardReport></DashboardReport>
                    </Tab>
                    <Tab eventKey="Others" title={
                    <>
                        <span className="badge">08</span> Others
                    </>}
                    >
                    <DashboardReport></DashboardReport>
                    </Tab>
                </Tabs>
            </div>
        </Fragment>
    )
} 

export default AdminPage;