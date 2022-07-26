import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import BasicPopup from "../../components/popups/basicPopup";

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
                <BasicPopup></BasicPopup>
            </div>
        </Fragment>
    )
} 

export default AdminPage;