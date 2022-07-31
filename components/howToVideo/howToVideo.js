import React, { Component } from 'react';

class HowToVideo extends Component {
    render() { 
        return (<>
            <div className='wrapper-section mb-3'>
                <div className='row align-items-center mb-2'>
                    <div className='col-lg-2'>
                        <label className=''>Title</label>
                    </div>
                    <div className='col-lg-10'>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>
                <div className='row align-items-center mb-2'>
                    <div className='col-lg-2'>
                        <label className=''>Description</label>
                    </div>
                    <div className='col-lg-10'>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>
                <div className='row align-items-center mb-2'>
                    <div className='col-lg-2'>
                        <label className=''>Category</label>
                    </div>
                    <div className='col-lg-10'>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>
                <div className='row align-items-center mb-2'>
                    <div className='col-lg-2'>
                        <label className=''>Thumbnail<span className='text-danger'>(jpg)</span></label>
                    </div>
                    <div className='col-lg-10'>
                        <input className="form-control" type="file" id="" multiple />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2'>
                        <label className=''>Youtube Link</label>
                    </div>
                    <div className='col-lg-10'>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>
                <div className='row flex-column-reverse flex-lg-row mt-3'>
                    <div className='col-lg-2 d-grid'>
                        <button className='btn btn-primary'><img className='me-2' src='../../icons/add.png' />Create Video</button>
                    </div>
                    <div className='offset-lg-7 col-lg-3 mb-3 mb-lg-0'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6'>
                                <label className=''>Ordering Number</label>
                            </div>
                            <div className='col-lg-6'>
                                <input type='text' className='form-control'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-lg-6 mb-3 mb-lg-0'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>What is STEM Education?</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>How to conduct STEM Safeer sessions?</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 mb-3 mb-lg-0'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Learn how to engage ebtire school in STEM club-activities</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>What are STEM Clubs?</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
            </div>
        </>);
    }
}
 
export default HowToVideo;