import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";

function AdminPage() {
    return (
        <Fragment>
            <TopNavAdmin></TopNavAdmin>
            <AdminSideNav></AdminSideNav>
        </Fragment>
    )
} 

export default AdminPage;