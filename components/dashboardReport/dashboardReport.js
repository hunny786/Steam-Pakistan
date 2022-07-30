import React, { Component } from 'react';
import EnhancedTable from '../table';

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