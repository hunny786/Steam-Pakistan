import React, { Component } from 'react';

class PracticalBooks extends Component {
    state = {  } 
    render() { 
        return (
            <div className='bg-light-grey'>
                <div className='container py-5'>
                    <h2 className='heading'>Practical Books</h2>
                    <div className='row mt-5'>
                        <div className='col-12 col-sm-4'>
                            <div className='d-flex align-items-center justify-content-center justify-content-sm-start mb-5'>
                                <img src="../../images/aaerospace.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Astronomy</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='d-flex align-items-center justify-content-center mb-5'>
                                <img src="../../images/bio.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Biology</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='d-flex align-items-center justify-content-center justify-content-sm-end mb-5'>
                                <img src="../../images/chem.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Chemistry</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-4'>
                            <div className='d-flex align-items-center justify-content-center justify-content-sm-start mb-5 mb-sm-0'>
                                <img src="../../images/maths.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Maths</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='d-flex align-items-center justify-content-center mb-5 mb-sm-0'>
                                <img src="../../images/phsics.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Physics</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='d-flex align-items-center justify-content-center justify-content-sm-end mb-0'>
                                <img src="../../images/robotics.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Robotics</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PracticalBooks;