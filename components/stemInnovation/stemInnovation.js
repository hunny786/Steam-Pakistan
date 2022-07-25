import React, { Component } from 'react';
import stemInnovationStyles from './stemInnovation.module.css'

class StemInnovation extends Component {
    state = {  } 
    render() { 
        return (
            <div id='innovation' className='bg-dark-grey'>
                <div className='container py-5'>
                    <h2 className='heading white mb-5'>STEM Innovation</h2>
                    <div className={`${stemInnovationStyles.featuredImgWrapper} d-none d-sm-block`}>
                        <img src='../../images/innov-video-featured-frame.png' />
                        <a href="https://www.youtube.com/embed/-exHtFarKXA" target='_blank' rel='noreferrer'>
                            <img className={stemInnovationStyles.featuredImgThumbnail} src='../../images/Innov-thumb-featured.jpg' />
                        </a>
                        <p className='title white'>How to engage entire school in STEM Club related activities?</p>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-12 col-sm-4 d-sm-none'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/-exHtFarKXA" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-featured.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title white pt-4 mb-0'>How to engage entire school in STEM Club related activities?</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=uVN9TiAudBM" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-1.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title white pt-4 mb-0'>What is STEM Education?</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=GpWHQhX3UHg" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-2.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title white pt-4 mb-0'>What are STEM Clubs?</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=OL70zHu2NqI" className='video text-center text-sm-start'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-3.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title white pt-4 mb-0'>How to conduct STEM Club Safeer Sessions?</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-12 col-sm-4'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=nVBx-d4d2uc" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-4.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title white pt-4 mb-0'>What is STEM Education?</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=V1v0ZTJP8OI" className='video text-center text-sm-start mb-4'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-5.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title white pt-4 mb-0'>What are STEM Clubs?</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=5GPVitfdRDo" className='video text-center text-sm-start'>
                                <p className='time-stamp white'>STEM - 18 May 2022</p>
                                <div className='thumbnail'>
                                    <img className='thumbnail-img black' src="../../images/Innov-thumb-6.jpg"/>
                                    <div className='play-btn'><img className='me-2' src='../../icons/play.png' />Play video</div>
                                </div>
                                <p className='title white pt-4 mb-0'>How to conduct STEM Club Safeer Sessions?</p>
                                <div className='watch-btn'>Watch <span className='chevron'>›</span></div>
                            </a>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-12 text-center'>
                            <a className="btn btn-outline-dark btn-hollow-light" href='/innovationDetail/' target='_blank' rel='noreferrer'>View All</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default StemInnovation;