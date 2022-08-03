import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

class Register extends Component {
    render() { 
        return (<>
          <form>
            <div className='auth-wrapper'>
                <div className='user-form-wrapper register p-4 mx-lg-4'>
                    <img className='mb-4' src='../../images/logo-web-small.png' />
                        <h2 className='heading mb-4'>Register</h2>
                        <p className='mb-4'>Already have an account? <a href='' className=''>Login</a></p>
                        <div className='row'>
                            <div className='col-lg-4 mb-2 mb-lg-0'>
                                <Form.Select className='mb-2' aria-label="Default select example">
                                    <option>Select Province</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Select className='mb-2' aria-label="Default select example">
                                    <option>Type of School</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Select className='mb-2' aria-label="Default select example">
                                    <option>Select Tier of a School</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Select className='mb-2' aria-label="Default select example">
                                    <option>Select Gender</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <input type='text' className='form-control' placeholder='School Name'></input>
                            </div>
                            <div className='col-lg-4'>
                                <textarea type='text' className='form-control mb-2' rows='5' placeholder='School Address'></textarea>
                                <input type='text' className='form-control mb-2' placeholder='School Enrollment'></input>
                                <input type='text' className='form-control mb-2' placeholder='EMIS Code'></input>
                            </div>
                            <div className='col-lg-4'>
                                <input type='text' className='form-control mb-2' placeholder='Name of Applicant'></input>
                                <input type='text' className='form-control mb-2' placeholder='Designation/Position'></input>
                                <input type='text' className='form-control mb-2' placeholder='Contact Number'></input>
                                <input type='text' className='form-control mb-2' placeholder='Email Address'></input>
                                <input type='password' className='form-control mb-2' placeholder='Password'></input>
                            </div>
                        </div>
                        <div className='row mt-4'>
                        <div className='col-lg-2 offset-lg-5'>
                            <div className='d-grid'>
                            <Button type='button' className='btn btn-primary btn-block'>Register</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        </>);
    }   
}
 
export default Register;