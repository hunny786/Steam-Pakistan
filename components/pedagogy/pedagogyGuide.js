import React, { Component } from 'react';

class PedagogyGuide extends Component {
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
                        <label className=''>Upload Document<span className='text-danger'>(pdf)</span></label>
                    </div>
                    <div className='col-lg-10'>
                        <input className="form-control" type="file" id="" multiple />
                    </div>
                </div>
                <div className='row align-items-center mb-2'>
                    <div className='col-lg-2'>
                        <label className=''>Upload Icon<span className='text-danger'>(jpg)</span></label>
                    </div>
                    <div className='col-lg-10'>
                        <input className="form-control" type="file" id="" multiple />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-2 mb-3 mb-lg-0 d-grid'>
                        <button className='btn btn-primary'><img className='me-2' src='../../icons/add.png' />Create Video</button>
                    </div>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-lg-6 mb-3 mb-lg-0'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Astronomy Learning Manual</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Biology Learning Manual</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 mb-3 mb-lg-0'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Mathematics Learning Manual</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='wrapper-section p-4'>
                        <label className=''>Stem Club</label>
                        <h5 className='text-primary fw-bold my-2'>Chemistry Learning Manual</h5>
                        <a href='#'><img className='me-2' src='../../icons/edit-grey.png' /></a>
                        <a href='#'><img src='../../icons/delete-grey.png' /></a>
                    </div>
                </div>
            </div>
        </>);
    }
}
 
export default PedagogyGuide;