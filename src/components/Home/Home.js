import React from 'react'
import Blogs from '../Blogs/Blogs'
import Customer from '../Customer/Customer'
// import Dashboard from '../Dashboard/Dashboard'
import FAQ from '../FAQS/FAQ'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
// import BreakfastFood from '../Meal/Breakfast/BreakfastFood'
// import DinnerFood from '../Meal/Dinner/DinnerFood'
// import LunchFood from '../Meal/Lunch/LunchFood'
import Navbar from '../Navbar/Navbar'
import Order from '../Order/Order'
// import { Routes, Route, Outlet } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles';

const Home = ( {openModal, setOpenModal, openModals} ) => {


  return (
    <div>
      <Navbar openModals={openModals} openModal={openModal} setOpenModal={setOpenModal}/>
      <Header />
      <Customer />
      <Order />
      {/* <Dashboard /> */}
      {/* <Dashboard>
          <BreakfastFood />
      </Dashboard> */}
          
      
      <StyledEngineProvider injectFirst>
        <FAQ />
      </StyledEngineProvider>
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home