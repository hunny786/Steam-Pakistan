import React, { Component } from 'react';
import TableDistrictUser from '../tables/tableDistrictUser';

class UpdateDistrictUser extends Component {
    render() { 
        return (<>
            <div className='wrapper-section p-5'>
            <div className="row">
                    <div className="col-lg-3 mb-3">
                        <div className="input-group border rounded">
                            <button className="btn btn-search" type="button"><img src="../icons/quick-search.png" /></button>
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="" />
                        </div>
                    </div>
                </div>
                <TableDistrictUser />
            </div>
        </>);
    }
}
 
export default UpdateDistrictUser;