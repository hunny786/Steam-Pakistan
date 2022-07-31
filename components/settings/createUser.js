import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class CreateUser extends Component {
    render() { 
        return (<>
            <div className='wrapper-section p-5'>
                <div className='row'>
                    <div className='col-lg-6 mb-3'>
                        <input className='form-control'type='text' placeholder='User Name'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mb-3'>
                        <input className='form-control'type='number' placeholder='Phone Number'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mb-3'>
                        <input className='form-control'type='text' placeholder='Email Address'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mb-3'>
                        <input className='form-control'type='password' placeholder='Password'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mb-3'>
                        <Form.Select className='mb-2'>
                            <option>Select District</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Form.Select className='mb-2'>
                            <option>Select...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2 mb-3 mb-lg-0 d-grid'>
                        <button className='btn btn-primary'><img className='me-2' src='../../icons/add.png' />Create</button>
                    </div>
                </div>
            </div>
        </>);
    }
}
 
export default CreateUser;