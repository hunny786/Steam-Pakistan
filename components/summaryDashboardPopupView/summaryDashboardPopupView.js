import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import TableSummary from '../tables/tableSummary';


class SummaryDashboardPopupView extends Component {
    render() { 
        return (<>
            <div className='row mb-4'>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-lg-5 mb-3 mb-lg-0'>
                            <Form.Select>
                                <option>Select Province</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='col-lg-5 mb-3 mb-lg-0'>
                            <Form.Select>
                                <option>Select District</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='col-lg-2 d-grid'>
                            <button className='btn btn-primary'>Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapper-section p-0'>
                <TableSummary></TableSummary>
            </div>
        </>);
    }
}
 
export default SummaryDashboardPopupView;