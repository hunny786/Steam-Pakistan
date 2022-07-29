import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


class CreateReport extends Component {
    render() { 
        return (
            <>
                <div className="row mb-4">
                    <div className="col-lg-6">
                        <h3 className="text-primary">Lacas Primary School, Lahore</h3>
                    </div>
                    <div className="col-lg-6 text-end">
                        <button className="btn btn-warning me-2 text-white">Save as draft</button>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className='wrapper-section'>
                    <div className='row mb-2'>
                        <div className='col-lg-3'>
                            <label className='form-label mt-2'>Type of session</label>
                        </div>
                        <div className='col-lg-9'>
                            <Form.Select>
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-lg-3'>
                            <label className='form-label mt-2'>Number of Participants</label>
                        </div>
                        <div className='col-lg-9'>
                            <input type='text' className='form-control'></input>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-lg-3'>
                            <label className='form-label mt-2'>Date of Session</label>
                        </div>
                        <div className='col-lg-9'>
                            <input type='date' className='form-control'></input>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-lg-3'>
                            <label className='form-label mt-2'>Theme of Session</label>
                        </div>
                        <div className='col-lg-9'>
                            <input type='text' className='form-control'></input>
                        </div>
                    </div>
                    <hr/>
                    <div className='row' >
                        <div className='col-12'><h3>Attach Pictures</h3></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <label className='form-label mt-2'>Upload Pictures<span className='text-danger'>(jpg)</span></label>
                        </div>
                        <div className='col-lg-9'>
                            <input className="form-control" type="file" id="" multiple />
                        </div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-12'><h3>Attach Documents</h3></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <label className='form-label mt-2'>Upload Documents<span className='text-danger'>(pdf,doc)</span></label>
                        </div>
                        <div className='col-lg-9'>
                            <input className="form-control" type="file" id="" multiple />
                        </div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-12'><h3>Attach Videos</h3></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <label className='form-label mt-2'>Upload Videos<span className='text-danger'>(50mb limit)</span></label>
                        </div>
                        <div className='col-lg-9'>
                            <input className="form-control" type="file" id="" multiple />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default CreateReport;