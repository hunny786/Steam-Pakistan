import React, { Component } from 'react';
import contactUsStyles from './contactUs.module.css'

class ContactUs extends Component {
    state = {  } 
    render() { 
        return (
            <div id='contact' className={contactUsStyles.contactUsBg}>
                <div className='container py-5'>
                    <h2 className='heading white'>Contact Us</h2>
                    <form className={contactUsStyles.formContactUs}>
                        <div className='row pt-5'>
                            <div className='col-12 col-sm-6 offset-sm-3'>
                                <div className='row mb-3'>
                                    <div className='col-4 col-sm-3'>
                                        <label className='form-label'>Full Name</label>
                                    </div>
                                    <div className='col-8 col-sm-9'>
                                        <input className="form-control input-default white" type='text'></input>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-4 col-sm-3'>
                                        <label className='form-label'>Email</label>
                                    </div>
                                    <div className='col-8 col-sm-9'>
                                        <input className="form-control input-default white" type='text'></input>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-4 col-sm-3'>
                                        <label className='form-label'>District</label>
                                    </div>
                                    <div className='col-8 col-sm-9'>
                                        <input className="form-control input-default white" type='text'></input>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-4 col-sm-3'>
                                        <label className='form-label'>Phone No</label>
                                    </div>
                                    <div className='col-8 col-sm-9'>
                                        <input className="form-control input-default white" type='text'></input>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-4 col-sm-3'>
                                        <label className='form-label'>School Name</label>
                                    </div>
                                    <div className='col-8 col-sm-9'>
                                        <input className="form-control input-default white" type='text'></input>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-4 col-sm-3'>
                                        <label className='form-label'>Message</label>
                                    </div>
                                    <div className='col-8 col-sm-9'>
                                        <textarea className="form-control input-default white" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-4 col-sm-3'>
                                    </div>
                                    <div className='col-8 col-sm-9'>
                                        <button href="#" className="btn btn-primary read-btn">Send <span className="chevron">›</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3'></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default ContactUs;