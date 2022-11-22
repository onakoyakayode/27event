import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NigerianMenu from '../../images/jollofrice.jpeg'
import chops from '../../images/chops.jpeg'
import bacon from '../../images/bacon.jpeg'
import cake from '../../images/cake.jpeg'
import local from '../../images/local.jpg'
import './Event.css'

const Event = ({openModal, setOpenModal}) => {
  return (
    <>
        <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
        <div className='event'>
            <h2>Event Packages</h2>
            <div className='event-link animate__animated animate__slideInLeft animate__delay-1s'>
                <NavLink to='/nigerianMenu' className='nigerian-menu'>
                    <div className='nigerian-menu-img'>
                        <img src={NigerianMenu} alt='jollof'/>
                    </div>
                    <h4 className='nigerian-menu-link'>Nigerian Dish</h4>
                </NavLink>
                <NavLink to='/intercontinental' className='nigerian-menu'>
                    <div className='nigerian-menu-img'>
                        <img src={bacon} alt='bacon'/>
                    </div>
                    <h4 className='nigerian-menu-link'>Intercontinental Dish</h4>
                </NavLink>
                <NavLink to='/localdish' className='nigerian-menu'>
                    <div className='nigerian-menu-img'>
                        <img src={local} alt='local dish'/>
                    </div>
                    <h4 className='nigerian-menu-link'>Local Dish</h4>
                </NavLink>
                <NavLink to='/smallchops' className='nigerian-menu'>
                    <div className='nigerian-menu-img'>
                        <img src={chops} alt='chops'/>
                    </div>
                    <h4 className='nigerian-menu-link'>Small Chops</h4>
                </NavLink>
                <NavLink to='/cakes' className='nigerian-menu'>
                    <div className='nigerian-menu-img'>
                        <img src={cake} alt='cakes'/>
                    </div>
                    <h4 className='nigerian-menu-link'>Cakes</h4>
                </NavLink>
            </div>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Event