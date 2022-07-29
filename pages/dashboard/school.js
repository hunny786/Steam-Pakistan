import { Fragment } from "react";
import AdminSideNavSchool from "../../components/adminSideNav/adminSideNavSchool";
import CreateReport from "../../components/createReport/createReport";
import TopNavAdmin from "../../components/header/topNavAdmin";

function SchoolPage() {
    return (
        <Fragment>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNavSchool></AdminSideNavSchool>
            </aside>
            <div className="wrapper">
                <CreateReport></CreateReport>
            </div>
        </Fragment>
    )
} 

export default SchoolPage;