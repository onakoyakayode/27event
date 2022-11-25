import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../images/27-event-logo.jpeg';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-x'>
            <div className='footer-a'>
                <div className='footer-a1'>
                    <div className='footer-logo'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <h2>27Events</h2>
                </div>
                <div className='coy-address'>
                    <p>4, Ogunseinde street, ketu, Lagos state, Nigeria</p>
                    <p>Shop 3, The light complex. Behind Glo office challenge, Ibadan.</p>
                </div>
                <div className='coy-num'>
                    <a href='tel:08139376379'>08139376379</a>
                </div>
                <div className='coy-mail'>
                    <a href='mailto:misskemi27@gmail.com'>Misskemi27@gmail.com</a>
                </div>
                <div className='coy-socials'>
                    <FontAwesomeIcon className='socials' icon={faFacebook}/>
                    <FontAwesomeIcon className='socials' icon={faInstagram}/>
                    <FontAwesomeIcon className='socials' icon={faTwitter}/>
                    <FontAwesomeIcon className='socials' icon={faWhatsapp}/>
                    <FontAwesomeIcon className='socials' icon={faYoutube}/>
                    
                </div>
            </div>
            <div className='footer-b'>
                <h3>Links</h3>
                <ul>
                    <li>Our Menu</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className='footer-c'>
                <h3>Company</h3>
                <ul>
                    <li>Terms & Condtions</li>
                    <li>Privacy Policy</li>
                    <li>Purpose</li>
                </ul>
            </div>
            <div className='footer-d'>
                <h3>Community</h3>
                <ul>
                    <li>Contact</li>
                    <li>Influencers</li>
                    <li>Testimony</li>
                </ul>
            </div>
        </div>
        <div className='copyright'>
            <small>&copy; 2022 All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer