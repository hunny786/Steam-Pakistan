import React, { Component } from 'react';
import stemInnovationStyles from './stemInnovation.module.css'

class StemInnovation extends Component {
    state = {  } 
    render() { 
        return (
            <div id='innovation' className='bg-dark-grey'>
                <div className='container py-5'>
                    <h2 className='heading white mb-5'>STEM Innovation</h2>
                    <div className={stemInnovationStyles.featuredImgWrapper}>
                        <img  src='../../images/innov-video-featured-frame.png' />
                        <a href="https://www.youtube.com/embed/-exHtFarKXA" target='_blank'>
                            <img className={stemInnovationStyles.featuredImgThumbnail} src='../../images/Innov-thumb-featured.jpg' />
                        </a>
                        <p className='title white'>How to engage entire school in STEM Club related activities?</p>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-12 col-sm-4'>
                            <div className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-1.jpg"/>
                                    <a className='play-btn' href="https://www.youtube.com/watch?v=uVN9TiAudBM" target='_blank'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                </div>
                                <p className='title white pt-4 mb-0'>What is STEM Education?</p>
                                <a href='https://www.youtube.com/watch?v=uVN9TiAudBM' target='_blank' className='watch-btn'>Watch <span className='chevron'>›</span></a>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-2.jpg"/>
                                    <a className='play-btn' href="https://www.youtube.com/watch?v=GpWHQhX3UHg" target='_blank'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                </div>
                                <p className='title white pt-4 mb-0'>What are STEM Clubs?</p>
                                <a href='https://www.youtube.com/watch?v=GpWHQhX3UHg' target='_blank' className='watch-btn'>Watch <span className='chevron'>›</span></a>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='video text-center text-sm-start'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-3.jpg"/>
                                    <a className='play-btn' href="https://www.youtube.com/watch?v=OL70zHu2NqI" target='_blank'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                </div>
                                <p className='title white pt-4 mb-0'>How to conduct STEM Club Safeer Sessions?</p>
                                <a href='https://www.youtube.com/watch?v=OL70zHu2NqI' target='_blank' className='watch-btn'>Watch <span className='chevron'>›</span></a>
                            </div>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-12 col-sm-4'>
                            <div className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-4.jpg"/>
                                    <a className='play-btn' href="https://www.youtube.com/watch?v=nVBx-d4d2uc" target='_blank'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                </div>
                                <p className='title white pt-4 mb-0'>What is STEM Education?</p>
                                <a href='https://www.youtube.com/watch?v=nVBx-d4d2uc' target='_blank' className='watch-btn'>Watch <span className='chevron'>›</span></a>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-5.jpg"/>
                                    <a className='play-btn' href="https://www.youtube.com/watch?v=V1v0ZTJP8OI" target='_blank'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                </div>
                                <p className='title white pt-4 mb-0'>What are STEM Clubs?</p>
                                <a href='https://www.youtube.com/watch?v=V1v0ZTJP8OI' target='_blank' className='watch-btn'>Watch <span className='chevron'>›</span></a>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='video text-center text-sm-start'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-6.jpg"/>
                                    <a className='play-btn' href="https://www.youtube.com/watch?v=5GPVitfdRDo" target='_blank'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                </div>
                                <p className='title white pt-4 mb-0'>How to conduct STEM Club Safeer Sessions?</p>
                                <a href='https://www.youtube.com/watch?v=5GPVitfdRDo' target='_blank' className='watch-btn'>Watch <span className='chevron'>›</span></a>
                            </div>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-12 text-center'>
                            <button type="button" className="btn btn-outline-dark btn-hollow-light">View All</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default StemInnovation;