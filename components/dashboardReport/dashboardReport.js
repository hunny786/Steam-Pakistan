import React, { Component } from 'react';
import EnhancedTable from '../tables/table';

class DashboardReport extends Component {
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
 
export default DashboardReport;