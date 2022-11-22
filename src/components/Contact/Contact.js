import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
import Logo from '../../images/27-event-logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube, faPeriscope, faHashnode } from '@fortawesome/free-brands-svg-icons'
import { MessageIcon, Phone } from '../../Icon'
import 'animate.css';

const Contact = ({openModal, setOpenModal}) => {
  return (
    <>
        <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
        <div className='contact'>
            <div className='contact-card animate__animated animate__slideInUp'>
                <div className='contact-card-design'></div>
                <div className='contact-card-design-2'></div>
                <div className='contact-logo'>
                    <img src={Logo} alt='27Events logo' />
                </div>
                <div className='contact-person'>
                    <h2>Ejimakinde Oluwakemi</h2>
                    <p>CEO</p>
                </div>
                <div className='contact-person-details'>
                    <div className='contact-person-address'>
                        <p>4, Ogunseinde street, ketu, Lagos state, Nigeria</p>
                        <FontAwesomeIcon className='contact-location' icon={faHashnode}/>
                    </div>
                    <div className='contact-person-mail'>
                        <a href='mailto:misskemi27@gmail.com'>misskemi27@gmail.com</a>
                        <MessageIcon />
                    </div>
                    <div className='contact-person-mail'>
                        <a href='tel:08139376379'>08139376379</a>
                        <Phone />
                    </div>
                    <div className='contact-person-mail'>
                        <a href=''>08139376379</a>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact