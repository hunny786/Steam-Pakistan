import React, { Component } from 'react';
import TableSchool from '../tables/tableSchool';

class SchoolReport extends Component {
    render() { 
        return (
            <>
                <div className='wrapper-section'>
                    <TableSchool></TableSchool>
                </div>
            </>
        );
    }
}
 
export default SchoolReport;