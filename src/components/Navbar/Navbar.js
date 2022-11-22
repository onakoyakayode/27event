import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../images/27-event-logo.jpeg'
import { ShoppingCart, ToggleButton, CloseToggleButton } from '../../Icon';


const Navbar = ( { setOpenModal } ) => {
    // const [counter, setCounter] = useState(0)
    // const addition = () => {
    //     setCounter(counter + 1) ;
    // }

    const [openNav, setOpenNav] = useState(false);

    const handleClickStyle = {
        left: openNav ? "0" : "-100%",
        transition: openNav ? "600ms ease-in-out" : "600ms ease-in-out",
    }


    const handleClick = () => {
        setOpenNav(!openNav);
    }


    const navLinkStyles = ({ isActive }) => {
        return {
            
            color: isActive ?  "var(--chng-color)" : "none",
        }
    }


    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    };
   
    window.addEventListener('scroll', changeBackground)
    
  return (
 
    <nav className= {nav ? "nav active" : "nav"}>
        <NavLink to='/' className='nav-logo'>
            <img src={Logo} className='logo' alt='nav-logo' />
            <h2 className={nav? "nav-header active" : "nav-header"}>27Events</h2>
        </NavLink>
        <ul className={nav ? "nav-items scroll" : "nav-items"} style={handleClickStyle}>
            <NavLink style={navLinkStyles} className='b' to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} className='b' to='/dashboard/breakfast'>Menu</NavLink>
            <NavLink style={navLinkStyles} className='b' to='/event'>Events</NavLink>
            <NavLink style={navLinkStyles} className='b' to='/about'>About Us</NavLink>
            <NavLink style={navLinkStyles} className='b' to='/contact'>Contact</NavLink>
            <ul className='booking'>
                <li onClick={() => setOpenModal(true)}>Book me now</li>
            </ul>
        </ul>
        <div className='cart'>
            <ShoppingCart className="active" />
            <div className='counter'>
                <h3>0</h3>
            </div>
        </div>
        <div className='toggleBtn'  onClick={handleClick}>
            {openNav ?  <CloseToggleButton /> : <ToggleButton className="active"/>}
        </div>
    
    </nav>
   
  )
}

export default Navbar