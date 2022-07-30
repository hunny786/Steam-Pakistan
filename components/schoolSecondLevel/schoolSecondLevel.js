import React, { Component } from 'react';


class SchoolSecondLevel extends Component {
    render() { 
        return (
            <>
                <div className='wrapper-section p-4'>
                    <div className='row mb-5'>
                        <div className='col'>
                            <a href='./school' className='btn btn-primary'>
                                <img src='../../icons/back.png'/>
                            </a>
                        </div>
                        <div className='col text-end'>
                            <button className='btn btn-danger'>
                                <img src='../../icons/delete.png'/>
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <label className='form-label'>Type of session:</label>
                            <p className='text-primary'>STEM Safeer</p>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <label className='form-label'>Theme of session:</label>
                            <p className='text-primary'>Arts & Crafts</p>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <label className='form-label'>Tags:</label>
                            <p className='text-primary'>None</p>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <label className='form-label'>Participants:</label>
                            <p className='text-primary'>32</p>
                        </div>
                    </div>
                    <hr></hr>
                    <h4 className='mt-4'>Images</h4>
                    <div className='row'>
                        <div className='col col-lg-6'>
                            <div className='row'>
                                <div className='col-6 col-lg-3 mb-2 mb-lg-0'>
                                    <div className='thumbnail'>
                                        <img className='thumbnail-img shadow-none black' src="../../images/thumb-1.jpg"/>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3 mb-2 mb-lg-0'>
                                    <div className='thumbnail'>
                                        <img className='thumbnail-img shadow-none black' src="../../images/thumb-2.jpg"/>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <div className='thumbnail'>
                                        <img className='thumbnail-img shadow-none black' src="../../images/thumb-3.jpg"/>
                                    </div>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <div className='thumbnail'>
                                        <img className='thumbnail-img shadow-none black' src="../../images/thumb-4.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <h4 className='mt-4'>Videos</h4>
                    <div className='row'>
                        <div className='col col-lg-6'>
                            <div className='row'>
                                <div className='col-12 col-lg-6 mb-2 mb-lg-0'>
                                    <div className='thumbnail'>
                                        <img className='thumbnail-img shadow-none black' src="../../images/vdo-thumb-1.jpg"/>
                                        <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <div className='thumbnail'>
                                        <img className='thumbnail-img shadow-none black' src="../../images/vdo-thumb-2.jpg"/>
                                        <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row mb-4'>
                        <div className='col text-center text-lg-left'>
                            <button className='btn btn-primary btn-sm'>
                                <img src='../../icons/add.png' /> Add Thumbnail
                            </button>
                        </div>
                    </div>
                    <div className='d-flex mb-3'>
                        <p className='me-4'>Published on: <span className='text-primary'>15th July 2022</span></p>
                        <p>Contributed by: <span className='text-primary'>Jinnah Public School, Karachi</span></p>
                    </div>
                    <div className='d-flex'>
                        <button className='btn btn-primary btn-sm me-3'>
                            <img src='../../icons/accept.png' /> Accept Report
                        </button>
                        <button className='btn btn-danger btn-sm'>
                            <img src='../../icons/reject.png' /> Reject Report
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
 
export default SchoolSecondLevel;