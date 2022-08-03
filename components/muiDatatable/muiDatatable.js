import MUIDataTable from "mui-datatables";
const MuiDataTableView = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
       ]
    
    const options = {
      filter: 'checkbox',
    };
    return (
        <MUIDataTable
            data={data}
            columns={columns}
            options={options}
        />
    );
}
 
export default MuiDataTableView;


