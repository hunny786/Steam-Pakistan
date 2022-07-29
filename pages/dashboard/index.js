import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SchoolReport from "../../components/schoolReport/schoolReport";

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
        </Fragment>
    )
} 

export default AdminPage;