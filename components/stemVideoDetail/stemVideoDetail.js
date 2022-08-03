import React, {  Component } from 'react';


class StemVideoDetail extends Component {
    render() {
        return (
            <div className='bg-light-grey'>
                <div className='container py-5 position-relative'>
                    <h2 className='heading mb-5'>How-to Video Tutorials</h2>
                    <div className='row mb-0 mb-lg-4'>
                        <div className='col-lg-4 mb-2 mb-lg-0'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/wbPPdgSnN2Q" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img' src="../../images/tutorial-thumb-1.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title pt-4 mb-0'>STEM Demonstration</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-lg-4 mb-2 mb-lg-0'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/O1I9yZZAqbE" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img' src="../../images/tutorial-thumb-2.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title pt-4 mb-0'>Hands on STEM activities</p>
                                <div className='watch-btn' >Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-lg-4 mb-2 mb-lg-0'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/jMgsLqRTjIk" className='video text-center text-sm-start'>
                                <p className='time-stamp'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img' src="../../images/tutorial-thumb-3.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title pt-4 mb-0'>Trigonometry and Triangles</p>
                                <div className='watch-btn' >Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 mb-2 mb-lg-0'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/wbPPdgSnN2Q" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img' src="../../images/tutorial-thumb-1.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title pt-4 mb-0'>Lava Lamp - STEM Competition</p>
                                <div className='watch-btn' >Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-lg-4 mb-2 mb-lg-0'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/O1I9yZZAqbE" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img' src="../../images/tutorial-thumb-2.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title pt-4 mb-0'>- STEM Demonstration - Lalah Rukh (Science Fuse)</p>
                                <div className='watch-btn' >Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-lg-4 mb-2 mb-lg-0'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/jMgsLqRTjIk" className='video text-center text-sm-start'>
                                <p className='time-stamp'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img' src="../../images/tutorial-thumb-3.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title pt-4 mb-0'>STEM Demonstration - Sana Mahmood</p>
                                <div className='watch-btn' >Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StemVideoDetail;