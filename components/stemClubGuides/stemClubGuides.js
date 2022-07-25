import React, {  Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Link from 'next/dist/client/link';


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
            <div id='guides' className='container py-5'>
                <h2 className='heading'>STEM Club Guides</h2>
                <Carousel className='carousel-custom-indicators' indicators={false} interval={null} nextIcon ={nextIcon} prevIcon={prevIcon}  index={this.state.index} direction={this.state.direction}>
                    <Carousel.Item>
                        <div className='row pt-5'>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-1.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                                    <a href='https://drive.google.com/file/d/1HoG8OXtgbnVGfr-Qpsm1E5Yew8lP91tm/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-2.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                                    <a href='https://drive.google.com/file/d/1VbRZuTylDHBUkXoaF3g9Ke1RuY36zWyA/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-3.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                                    <a href='https://drive.google.com/file/d/12VZcfRsFXikBwe3hhdR2_5x9ReYDkrrI/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-4.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                                    <a href='https://drive.google.com/file/d/10P-OA05IBPgc_zGZKL1rbVwN3RXt7Pr_/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
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
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                                    <a href='https://drive.google.com/file/d/1IWgpPNYNY6ZAfJJ8OwJ-r4pBLEAiUq3u/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-2-u.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                                    <a href='https://drive.google.com/file/d/1tL2G4Z_4ueG6QNhNPabwgsnUedKOFXn8/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start mb-4'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-3-u.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                                    <a href='https://drive.google.com/file/d/1YWGTrAW5SWfMHvhPKbDZgv72GNTfRkKX/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                                </div>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <div className='book text-center text-sm-start'>
                                    <div className='thumbnail'>
                                        <img src="../../images/guide-thumb-4-u.jpg"/>
                                        <img  src="../../images/guide-right.png" />
                                    </div>
                                    <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                                    <a href='https://drive.google.com/file/d/16-h6pJ7ywdIgZG20vgrZa6Z_hLlIP-dJ/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className='row pt-5'>
                        <div className='col-12 text-center'>
                            <Link href='/ClubGuidesDetail/' passHref>
                                <a type="button" className="btn btn-outline-dark btn-hollow-dark">VIEW ALL</a>
                            </Link>
                        </div>
                    </div>
            </div>
        )
    }
}
export default StemClubGuides;