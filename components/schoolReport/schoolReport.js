import React, { Component } from 'react';
import EnhancedTable from '../table';

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