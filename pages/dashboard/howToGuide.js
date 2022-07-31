import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import HowToGuide from "../../components/howToGuide/howToGuide";

function HowtoGuideView() {
    return (
        <Fragment>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNav></AdminSideNav>
            </aside>
            <div className="wrapper">
                <HowToGuide></HowToGuide>
            </div>
        </Fragment>
    )
} 

export default HowtoGuideView;