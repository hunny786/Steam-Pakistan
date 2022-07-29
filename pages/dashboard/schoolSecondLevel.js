import { Fragment } from "react";
import AdminSideNavSchool from "../../components/adminSideNav/adminSideNavSchool";
import TopNavAdmin from "../../components/header/topNavAdmin";
import SchoolSecondLevel from "../../components/schoolSecondLevel/schoolSecondLevel";

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
                <SchoolSecondLevel></SchoolSecondLevel>
            </div>
        </Fragment>
    )
} 

export default SchoolPage;