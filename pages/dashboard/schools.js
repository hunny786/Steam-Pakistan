import React from "react";
import TopNavAdmin from "../../components/header/topNavAdmin";
import AdminSideNav from "../../components/adminSideNav/adminSideNav";
import TableSchools from "../../components/tables/tableSchools";
import FullScreenModal from "../../components/popups/Fullscreen";

function SchoolsDashboard() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <header>
                <TopNavAdmin></TopNavAdmin>
            </header>
            <aside>
                <AdminSideNav></AdminSideNav>
            </aside>
            <div className="wrapper">
                <div className="row mb-3">
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                        <div className="input-group">
                            <button className="btn btn-search" type="button"><img src="../icons/quick-search.png" /></button>
                            <input type="text" className="form-control" placeholder="Search Schools" aria-label="Search" aria-describedby="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-2 offset-lg-6 text-end d-grid">
                        <button onClick={() => setModalShow(true)} className="btn btn-primary">
                            <img src="../../icons/nav-dashboard-white.png" /> Summary
                        </button>
                    </div>
                </div>
                <TableSchools></TableSchools>
                <FullScreenModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                >
                </FullScreenModal>
            </div>
        </>
    )
} 

export default SchoolsDashboard;