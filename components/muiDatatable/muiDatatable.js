import React from "react";
import MUIDataTable from "mui-datatables";
import ConfirmationModal from "../popups/Confirmation";

const MuiDataTableView = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const columns = [
        {
            name: "name",
            label: "School Name",
            options: {
            filter: true,
            sort: false,
            }
        },
        {
            name: "district",
            label: "District",
            options: {
            filter: false,
            sort: true,
            }
        },
        {
            name: "theme",
            label: "Theme",
            options: {
            filter: false,
            sort: false,
            }
        },
        {
            name: "date",
            label: "Date",
            options: {
            filter: true,
            sort: true,
            }
        },
        {
            name: "status",
            label: "Status",
            options: {
            filter: false,
            sort: true,
            }
        },
        {
            name: "details",
            label: "Details",
            options: {
            filter: false,
            sort: false,
            }
        },
        {
            name: "approve",
            options: {
            filter: false,
            sort: false,
            customHeadLabelRender: (value) => { 
                return (
                   <>
                     <a href='#' onClick={() => setModalShow(true)}><img src='../icons/icon-tick-double.png' /></a>
                    </>
                 )
              }
            }
        },
    ];
        
    const data = [
        { 
            name: "Sideeq Public School Rawalpindi", 
            district: "Rawalpindi", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: "<span className='text-danger'>Pending</span>",
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Peshawar Model Girls High School", 
            district: "Peshawar", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-warning'>District Approval</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Peshawar Model Girls High School", 
            district: "Peshawar", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-warning'>District Approval</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Peshawar Model Girls High School", 
            district: "Peshawar", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-warning'>District Approval</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Sideeq Public School Rawalpindi", 
            district: "Rawalpindi", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-danger'>Pending</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Sideeq Public School Rawalpindi", 
            district: "Rawalpindi", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-danger'>Pending</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Peshawar Model Girls High School", 
            district: "Peshawar", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-warning'>District Approval</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Peshawar Model Girls High School", 
            district: "Peshawar", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-warning'>District Approval</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Peshawar Model Girls High School", 
            district: "Peshawar", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-warning'>District Approval</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Sideeq Public School Rawalpindi", 
            district: "Rawalpindi", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-danger'>Pending</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
        { 
            name: "Sideeq Public School Rawalpindi", 
            district: "Rawalpindi", 
            theme: "Math Cricles", 
            date: "05-June-2022", 
            status: <span className='text-danger'>Pending</span>,
            details: <a href='./dashboard/schoolSecondLevel'><img src='../icons/icon-view.png' /></a>,
            approve: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>
        },
    ];
    
    const options = {
        filterType: 'checkbox',
    };
    return (
        <>
            <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
            />
            <ConfirmationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </>
        )
    }

export default MuiDataTableView;