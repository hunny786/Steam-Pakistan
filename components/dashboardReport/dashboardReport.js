import React, { Component } from 'react';
import EnhancedTable from '../tables/table';

class DashboardReport extends Component {
    render() { 
        return (
            <>
                <div className='wrapper-section'>
                    <div className="row">
                        <div className="offset-lg-9 col-12 col-lg-3 mb-3 mb-lg-0">
                            <div className="input-group">
                                <button className="btn btn-search" type="button"><img src="../icons/quick-search.png" /></button>
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="" />
                                <button onClick={() => setModalShow(true)} className="btn btn-filter" type="button"><img src="../icons/filter.png" /></button>
                            </div>
                        </div>
                    </div>
                    <EnhancedTable></EnhancedTable>
                </div>
            </>
        );
    }
}
 
export default DashboardReport;