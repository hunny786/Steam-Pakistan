import React, {  Component } from 'react';
import {Carousel} from 'react-bootstrap';


class videoTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,  //index which u want to display first
            direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
            nextIcon: <img src="../../icons/arrrow-right.png" />,
            prevIcon: <img src="../../icons/arrrow-left.png" />
        }
    }

    render() {
        const {nextIcon,prevIcon}=this.state;
        return (
            <div id='tutorials' className='bg-light-grey'>
                <div className='container py-5'>
                    <h2 className='heading'>STEM Video Tutorials</h2>
                    <Carousel className='carousel-custom-indicators' indicators={false} interval={null} nextIcon ={nextIcon} prevIcon={prevIcon}  index={this.state.index} direction={this.state.direction}>
                        <Carousel.Item>
                            <div className='row pt-5'>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start mb-4'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-1.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/wbPPdgSnN2Q" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>What is STEM Education?</p>
                                        <a href='https://www.youtube.com/embed/wbPPdgSnN2Q' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start mb-4'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-2.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/O1I9yZZAqbE" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>What are STEM Clubs?</p>
                                        <a href='https://www.youtube.com/embed/O1I9yZZAqbE' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-3.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/jMgsLqRTjIk" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>How to conduct STEM Club Safeer Sessions?</p>
                                        <a href='https://www.youtube.com/embed/jMgsLqRTjIk' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='row pt-5'>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start mb-4'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-1.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/wbPPdgSnN2Q" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>What is STEM Education?</p>
                                        <a href='https://www.youtube.com/embed/wbPPdgSnN2Q' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start mb-4'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-2.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/O1I9yZZAqbE" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>What are STEM Clubs?</p>
                                        <a href='https://www.youtube.com/embed/O1I9yZZAqbE' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-3.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/jMgsLqRTjIk" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>How to conduct STEM Club Safeer Sessions?</p>
                                        <a href='https://www.youtube.com/embed/jMgsLqRTjIk' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='row pt-5'>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start mb-4'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-1.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/wbPPdgSnN2Q" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>What is STEM Education?</p>
                                        <a href='https://www.youtube.com/embed/wbPPdgSnN2Q' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start mb-4'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-2.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/O1I9yZZAqbE" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>What are STEM Clubs?</p>
                                        <a href='https://www.youtube.com/embed/O1I9yZZAqbE' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-4'>
                                    <div className='video text-center text-sm-start'>
                                        <p className='time-stamp'>STEM - 18 May 2022</p>
                                        <div className='thumbnail'>
                                            <img className='thumbnail-img' src="../../images/tutorial-thumb-3.jpg"/>
                                            <a className='play-btn' href="https://www.youtube.com/embed/jMgsLqRTjIk" target='_blank' rel='noreferrer'><img className='me-2' src='../../icons/play.png' />Play video</a>
                                        </div>
                                        <p className='title pt-4 mb-0'>How to conduct STEM Club Safeer Sessions?</p>
                                        <a href='https://www.youtube.com/embed/jMgsLqRTjIk' className='watch-btn' target='_blank' rel='noreferrer'>Watch <span className='chevron'>›</span></a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default videoTutorial;