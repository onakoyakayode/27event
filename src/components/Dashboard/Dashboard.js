import React from 'react'
// import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
// import BreakfastFood from '../Meal/Breakfast/BreakfastFood'
import Menu from '../Menu/Menu'
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'

const Dashboard = ({children, openModal, setOpenModal}) => {
  return (
    <>
    <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
      <div className='dashboard'>
        <div className='dashboard-container'>
            <div>
                <Menu />
            </div>
            <div className='dashboard-children'>
                {children}
                {/* <BreakfastFood /> */}
                {/* <Outlet /> */}
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard;
