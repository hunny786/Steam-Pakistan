import React, { Component } from 'react';

class PedagogyVideo extends Component {
    render() { 
        return (<>
            <div className='wrapper-section p-5 mb-3'>
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
                        <label className=''>Summary</label>
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
                <div className='row mt-4'>
                    <div className='col-lg-2 mb-3 mb-lg-0 d-grid'>
                        <button className='btn btn-primary'><img className='me-2' src='../../icons/add.png' />Create Video</button>
                    </div>
                    <div className='offset-lg-6 col-lg-1 mt-2'>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="" />
                            <label className="form-check-label">Featured</label>
                        </div>
                    </div>
                    <div className='col-lg-3'>
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
                        <h5 className='text-primary fw-bold my-2'>Activities explaining forces and machines</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Teaching concepts through STEM Bingo!</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 mb-3 mb-lg-0'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Create a Balloon Hovercraft in your class</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Activities explaining forces and machines</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
            </div>
        </>);
    }
}
 
export default PedagogyVideo;