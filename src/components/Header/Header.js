import React from 'react'
// import Navbar from '../Navbar/Navbar'
import './Header.css'
import Caterer from '../../images/jollofrice.jpeg'
import { Link } from 'react-router-dom'

const Header = () => {

   

  return (
    <header className='header section'>
        
        <div className='header-container'>
            <div className='header-content'>
                <div>
                    <h3>Eat <span>Healthy,</span></h3>
                    <h3>Live <span>Long,</span></h3>
                    <h3>Live <span>Strong!</span></h3>
                </div>
                <p>We cook and deliver the tastiest healthy food right away to your designated location.</p>
                <button className='chk'>
                    <Link to='/dashboard/breakfast' className='chk-btn'>
                        Check our food
                    </Link>  
                </button>
            </div>
            <div className='header-img'>
                <img src={Caterer} alt='caterer' />
            </div>
        </div>
    </header>
  )
}

export default Header