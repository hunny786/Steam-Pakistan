import React, { Component } from 'react';
import CreateReport from '../createReport/createReport';
import EnhancedTable from '../Table';

class SchoolReport extends Component {
    render() { 
        return (
            <>
                <div className='wrapper-section'>
                    <EnhancedTable></EnhancedTable>
                </div>
            </>
        );
    }
}
 
export default SchoolReport;