import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import SummaryDashboard from "../../components/summaryDashboard/summaryDashboard";

function SummaryDashboardView() {
    return (
        <Fragment>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNav></AdminSideNav>
            </aside>
            <div className="wrapper">
                <SummaryDashboard></SummaryDashboard>
            </div>
        </Fragment>
    )
} 

export default SummaryDashboardView;