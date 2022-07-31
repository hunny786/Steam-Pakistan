import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import Pedagogy from "../../components/pedagogy/pedagogy";

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
                <Pedagogy></Pedagogy>
            </div>
        </Fragment>
    )
} 

export default PedagogyView;