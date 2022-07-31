import { Fragment } from "react";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TopNavAdmin from "../../components/header/topNavAdmin";
import HowToVideo from "../../components/howToVideo/howToVideo";

function HowToVideoView() {
    return (
        <Fragment>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNav></AdminSideNav>
            </aside>
            <div className="wrapper">
                <HowToVideo></HowToVideo>
            </div>
        </Fragment>
    )
} 

export default HowToVideoView;