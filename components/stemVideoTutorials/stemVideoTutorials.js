import React, {  Component } from 'react';
import Slider from "react-slick";


class videoTutorial extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
    this.slider.slickNext();
    }
    previous() {
    this.slider.slickPrev();
    }

    render() {
        const settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                }
              ]
        };
        return (
            <div id='tutorials' className='bg-light-grey'>
                <div className='container py-5 position-relative'>
                    <h2 className='heading mb-5'>How-to Video Tutorials</h2>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="pe-3" key={1}>
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
                        <div className="pe-3" key={2}>
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
                        <div className="pe-3" key={3}>
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
                        <div className="pe-3" key={4}>
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
                        <div className="pe-3" key={5}>
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
                        <div className="pe-3" key={6}>
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
                    </Slider>
                    <div className='d-flex slick-arrows'>
                        <a href='javascript:void(0)' className='me-2' onClick={this.previous}>
                            <img src="../../icons/arrrow-left.png"/>
                        </a>
                        <a href='javascript:void(0)' onClick={this.next}>
                            <img src="../../icons/arrrow-right.png"/>
                        </a>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-12 text-center'>
                            <a type="button" className="btn btn-outline-dark btn-hollow-dark" href='/StemVideoDetail/' target='_blank' rel='noreferrer'>VIEW ALL</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default videoTutorial;