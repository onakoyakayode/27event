import React from 'react'
import './Menu.css'
import { NavLink, Outlet } from 'react-router-dom'

const Menu = () => {

    const menuLinkStyles = ({ isActive }) => {
        return {
            backgroundColor: isActive ? "#a52d93" : "#9b0b012f",
            color: isActive ? "#fff" : "#fff",
        }
       
    }
  return (
    <div className='menu'>
        <div className='menu-items'>
            <h1>Check our menu</h1>
        </div>
        <div className='menu-links'>
            <NavLink style={menuLinkStyles} to='breakfast' className='a'>
                <h4>Breakfast</h4>
            </NavLink>
            <NavLink style={menuLinkStyles} to='lunch' className='a'>
                <h4>Lunch</h4>
            </NavLink>
            
            <NavLink style={menuLinkStyles} to='dinner' className='a'>
                <h4>Dinner</h4>
            </NavLink>

        </div>
        <Outlet />
    </div>
  )
}

export default Menu