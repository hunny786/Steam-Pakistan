import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class ResourcesView extends Component {
    render() { 
        return (
            <>
                <div className='container py-5 position-relative'>
                    <h2 className='heading mb-3'>Resources</h2>
                    <p>Our bespoke collections of hand-picked resources have been created to give you new ideas and inspiration.</p>
                </div>
                <div className='wrapper-grey-bg py-5'>
                    <div className='container'>
                        <div className='wrapper-section'>
                            <div className='row text-center'>
                                <div className='col-4'>
                                    <Button type="button" size='lg' className='btn-default'>STEAM Club</Button>
                                </div>
                                <div className='col-4'>
                                    <Button type="button" size='lg' className='btn-default'>STEAM Safeer</Button>
                                </div>
                                <div className='col-4'>
                                    <Button type="button" size='lg' className='btn-default'>Teacher Hub</Button>
                                </div>
                            </div>
                            <hr className='mt-5' />
                            <h3 className='sub-heading my-4'>STEAM Club</h3>
                            <div className='row'>
                                <div className='col-4'>
                                    <article>
                                        <img src='../../images/resources-1.png' />
                                        <a href=''>Bring engineering into your primary school</a>
                                    </article>
                                </div>
                                <div className='col-4'>
                                    <article>
                                        <img src='../../images/resources-2.png' />
                                        <a href=''>Teaching science through cross curricular topics</a>
                                    </article>
                                </div>
                                <div className='col-4'>
                                    <article>
                                        <img src='../../images/resources-3.png' />
                                        <a href=''>Teaching science through stories</a>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ResourcesView;