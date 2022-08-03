import React, { Component } from 'react';

class AboutOurProgram extends Component {
    state = {  } 
    render() { 
        return (
            <div id='about' className='container py-5'>
                <h2 className='heading mb-4'>About Our Program</h2>
                <p>STEAM Pakistan is an initiative of the Ministry of Federal Education and Professional Training (MoFEPT) that aims to advance secondary school-aged girls’ access to science, technology, engineering, arts, and mathematics education in Pakistan.</p>
                <p>The goal of this initiative is to equip and empower government schools to deliver world class STEAM education by offering back-end technical support and working towards policy reforms which embed the initiative’s learning in the existing state structures.</p>
            </div>
        );
    }
}
 
export default AboutOurProgram;