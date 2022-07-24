import React, {  Component } from 'react';
import {Carousel} from 'react-bootstrap';


class StemClubGuides extends Component {
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
            <div className='container py-5'>
                <h2 className='heading'>STEM Club Guides</h2>
                <Carousel indicators={false} interval={null} nextIcon ={nextIcon} prevIcon={prevIcon}  index={this.state.index} direction={this.state.direction}>
                    <Carousel.Item>
                        <div className='row pt-5'>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-1.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(English)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-2.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(English)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-3.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(English)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-4.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(English)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='row pt-5'>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-1-u.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(Urdu)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-2-u.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(Urdu)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-3-u.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(Urdu)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-4-u.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book pt-4 mb-0'>Stem Clubs Guide</p>
                                    <p className='title book py-2 mb-0'>(Urdu)</p>
                                    <button href='#' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className='row pt-5'>
                        <div className='col-12 text-center'>
                            <button type="button" className="btn btn-outline-dark btn-hollow-dark">VIEW ALL</button>
                        </div>
                    </div>
            </div>
        )
    }
}
export default StemClubGuides;