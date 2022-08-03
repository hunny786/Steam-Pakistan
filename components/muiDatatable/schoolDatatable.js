import React from "react";
import MUIDataTable from "mui-datatables";

const SchoolDatatable = () => {

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
            name: "province",
            label: "Province",
            options: {
            filter: false,
            sort: true,
            }
        },
        {
            name: "type",
            label: "Type",
            options: {
            filter: false,
            sort: true,
            }
        },
        {
            name: "tier",
            label: "Tier",
            options: {
            filter: true,
            sort: true,
            }
        },
        {
            name: "gender",
            label: "Gender",
            options: {
            filter: false,
            sort: true,
            }
        },
        {
            name: "emis",
            label: "EMIS Code",
            options: {
            filter: false,
            sort: false,
            }
        }
    ];
        
    const data = [
        { 
            name: "Sideeq Public School Rawalpindi", 
            province: "Punjab", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '3355221',
        },
        { 
            name: "Peshawar Model High School", 
            province: "Peshawar", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '31558285',
        },
        { 
            name: "Peshawar Model High School", 
            province: "Peshawar", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '31558285',
        },
        { 
            name: "Peshawar Model High School", 
            province: "Peshawar", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '31558285',
        },
        { 
            name: "Sideeq Public School Rawalpindi", 
            province: "Punjab", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '3355221',
        },
        { 
            name: "Sideeq Public School Rawalpindi", 
            province: "Punjab", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '3355221',
        },
        { 
            name: "Peshawar Model High School", 
            province: "Peshawar", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '31558285',
        },
        { 
            name: "Peshawar Model High School", 
            province: "Peshawar", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '31558285',
        },
        { 
            name: "Peshawar Model High School", 
            province: "Peshawar", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '31558285',
        },
        { 
            name: "Sideeq Public School Rawalpindi", 
            province: "Punjab", 
            type: "Government", 
            tier: "Secondary", 
            gender: "Female",
            emis: '3355221',
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
        </>
        )
    }

export default SchoolDatatable;