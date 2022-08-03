import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends Component {
    render() { 
        return (<>
          <form>
            <div className='auth-wrapper'>
                <div className='user-form-wrapper p-4 mx-lg-4'>
                    <img className='mb-4' src='../../images/logo-web-small.png' />
                    <h2 className='heading mb-4'>Login</h2>
                    <p className='mb-4'>Don’t have an account? <a href='' className=''>Register</a></p>
                    <input type='text' className='form-control mb-2' placeholder='Email Address'></input>
                    <input type='password' className='form-control mb-4' placeholder='Password'></input>
                    <p className='mb-4'>Forgot Password? <a href='' className=''>Reset</a></p>
                    <div className='row'>
                        <div className='col-6 offset-3'>
                        <div className='d-grid'>
                            <Button type='button' className='btn btn-primary btn-block'>Login</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        </>);
    }   
}
 
export default Login;