import React, { Component } from 'react';

class PracticalBooks extends Component {
    state = {  } 
    render() { 
        return (
            <div id='practicals' className='bg-light-grey'>
                <div className='container py-5'>
                    <h2 className='heading'>Practical Books</h2>
                    <div className='row mt-5'>
                        <div className='col-12 col-sm-4'>
                            <a href="https://drive.google.com/file/d/16eOzdU4aQzDET4V4g5Qr5bQouEXeO0Et/view?usp=sharing" target='_blank' className='d-flex align-items-center justify-content-center justify-content-sm-start mb-5'>
                                <img src="../../images/aaerospace.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Astronomy</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a href="https://drive.google.com/file/d/1XvCsJtoahOyIjP_1GA62YVQP4s6fVEy4/view?usp=sharing" target='_blank' className='d-flex align-items-center justify-content-center mb-5'>
                                <img src="../../images/bio.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Biology</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a href="https://drive.google.com/file/d/1m6tTTEW6smIPpaYOzsXuN9_vYwpuV96n/view?usp=sharing" target='_blank' className='d-flex align-items-center justify-content-center justify-content-sm-end mb-5'>
                                <img src="../../images/chem.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Chemistry</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-4'>
                            <a href="https://drive.google.com/file/d/1uX4zDSB8FX023PTPPDC11o6wFQ9A_TB5/view?usp=sharing" target='_blank' className='d-flex align-items-center justify-content-center justify-content-sm-start mb-5 mb-sm-0'>
                                <img src="../../images/maths.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Maths</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a href="https://drive.google.com/file/d/1YRmsxHjsBVRpkSLhiKQAPf-VlVU6m0T3/view?usp=sharing" target='_blank' className='d-flex align-items-center justify-content-center mb-5 mb-sm-0'>
                                <img src="../../images/phsics.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Physics</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                         <a href="https://drive.google.com/file/d/1-zZLCmUQgryPWYASf83ff7_fjntr1B-o/view?usp=sharing" target='_blank' className='d-flex align-items-center justify-content-center justify-content-sm-end mb-0'>
                                <img src="../../images/robotics.png" />
                                <div className='book-content'>
                                    <p className="mb-0 ms-2">Robotics</p>
                                    <p className="mb-0 ms-2">Learning</p>
                                    <p className="mb-0 ms-2">Manual</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PracticalBooks;