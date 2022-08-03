import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ForgotPassword extends Component {
    render() { 
        return (<>
          <form>
            <div className='auth-wrapper'>
                <div className='user-form-wrapper p-4 mx-lg-4'>
                    <img className='mb-4' src='../../images/logo-web-small.png' />
                    <h2 className='heading mb-4'>Forgot Password?</h2>
                    <input type='text' className='form-control mb-4' placeholder='Enter Email Address'></input>
                    <div className='row'>
                        <div className='col-lg-8 offset-lg-2'>
                        <div className='d-grid'>
                            <Button type='button' className='btn btn-success btn-block'>Email Recovery Password</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        </>);
    }   
}
 
export default ForgotPassword;