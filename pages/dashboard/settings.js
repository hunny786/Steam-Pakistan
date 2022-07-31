import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import Settings from "../../components/settings/settings";

function PedagogyView() {
    return (
        <Fragment>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNav></AdminSideNav>
            </aside>
            <div className="wrapper">
                <Settings></Settings>
            </div>
        </Fragment>
    )
} 

export default PedagogyView;