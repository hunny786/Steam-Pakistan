import React, {  Component } from 'react';
import Slider from "react-slick";


class StemClubGuides extends Component {
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
            infinite: true,
            speed: 500,
            slidesToShow: 4,
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
            <div id='guides' className='container py-5 position-relative'>
                <h2 className='heading mb-5'>STEM Club Guides</h2>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div className="pe-3" key={1}>
                        <div className='book text-center text-sm-start mb-4'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-1.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                            <a href='https://drive.google.com/file/d/1HoG8OXtgbnVGfr-Qpsm1E5Yew8lP91tm/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
                    </div>
                    <div className="pe-3" key={2}>
                        <div className='book text-center text-sm-start mb-4'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-2.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                            <a href='https://drive.google.com/file/d/1VbRZuTylDHBUkXoaF3g9Ke1RuY36zWyA/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
                    </div>
                    <div className="pe-3" key={3}>
                        <div className='book text-center text-sm-start mb-4'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-3.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                            <a href='https://drive.google.com/file/d/12VZcfRsFXikBwe3hhdR2_5x9ReYDkrrI/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
                    </div>
                    <div className="pe-3" key={4}>
                        <div className='book text-center text-sm-start'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-4.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(English)</p>
                            <a href='https://drive.google.com/file/d/10P-OA05IBPgc_zGZKL1rbVwN3RXt7Pr_/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
                    </div>
                    <div className="pe-3" key={5}>
                        <div className='book text-center text-sm-start mb-4'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-1-u.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                            <a href='https://drive.google.com/file/d/1IWgpPNYNY6ZAfJJ8OwJ-r4pBLEAiUq3u/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
                    </div>
                    <div className="pe-3" key={6}>
                        <div className='book text-center text-sm-start mb-4'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-2-u.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                            <a href='https://drive.google.com/file/d/1tL2G4Z_4ueG6QNhNPabwgsnUedKOFXn8/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
                    </div>
                    <div className="pe-3" key={7}>
                        <div className='book text-center text-sm-start mb-4'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-3-u.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                            <a href='https://drive.google.com/file/d/1YWGTrAW5SWfMHvhPKbDZgv72GNTfRkKX/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
                    </div>
                    <div className="pe-3" key={8}>
                        <div className='book text-center text-sm-start'>
                            <div className='thumbnail'>
                                <img src="../../images/guide-thumb-4-u.jpg"/>
                                <img  src="../../images/guide-right.png" />
                            </div>
                            <p className='title book py-4 mb-0'>Stem Clubs Guide <br />(Urdu)</p>
                            <a href='https://drive.google.com/file/d/16-h6pJ7ywdIgZG20vgrZa6Z_hLlIP-dJ/view?usp=sharing' target='_blank' rel='noreferrer' className='btn btn-primary read-btn'>Read <span className='chevron'>›</span></a>
                        </div>
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
                        <a type="button" className="btn btn-outline-dark btn-hollow-dark" href='/ClubGuidesDetail/' target='_blank' rel='noreferrer'>VIEW ALL</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default StemClubGuides;