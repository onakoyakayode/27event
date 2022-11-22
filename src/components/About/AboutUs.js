import React from 'react'
import './AboutUs.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import buffet from '../../images/header1.jpeg'
import snack from '../../images/Snack.jpg'
import event from '../../images/event.jpeg'


const AboutUs = ({openModal, setOpenModal}) => {
  return (
    <>
        <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
        <div className='about'>
            <h2>About Us</h2>
            <div className='about-details'>
                <div className='x'>
                    <div className='img'>
                        <img src={buffet} alt='buffet'/>
                    </div>
                    <div className='background'>
                        <h4>Background</h4>
                        <p>Founded in 2014 by Chef and Managing Director Ejimakinde Oluwakemi, 27Events is an innovative and dynamic caterer backed by a dedicated team of hospitality and related industry professionals. </p>
                    </div>
                </div>
                <div className='x y'>
                    <div className='background'>
                        <h4>Our Mission</h4>
                        <p>We strive to provide high quality, great tasting food that is sourced from local Queensland businesses, whilst delivering great service to your customers</p>
                    </div>
                    <div className='img'>
                        <img src={snack} alt='snack'/>
                    </div>
                </div>
                <div className='x'>
                    <div className='img'>
                        <img src={event} alt='event'/>
                    </div>
                    <div className='background'>
                        <h4>What we do</h4>
                        <p>We are an accomplished caterer that caters for a variety of large scale events and corporate companies</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

export default AboutUs