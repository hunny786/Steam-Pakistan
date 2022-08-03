import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-sm text-center text-sm-start mb-3 mb-sm-0'>
                            <a href="#"><img src='../../images/logo-web-small.png' /></a>
                        </div>
                        <div className='col-12 col-sm text-center mb-3 mb-sm-0'>
                            <p>Supported by: Pak Alliance for Maths and Science</p>
                        </div>
                        <div className='col-12 col-sm'>
                            <div className='social-icons text-center text-sm-end'>
                                <a href="#"><img src='../../icons/icon-faceb.png'/></a>
                                <a href="#"><img src='../../icons/icon-insta.png'/></a>
                                <a href="#"><img src='../../icons/icon-twitter.png'/></a>
                                <a href="#"><img src='../../icons/icon-youtube.png'/></a>
                            </div>
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}
 
export default Footer;