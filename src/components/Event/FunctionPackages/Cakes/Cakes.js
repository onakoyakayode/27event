import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import './Cakes.css'

const Cakes = ({openModal, setOpenModal}) => {
  return (
    <>
        <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
        <div className='nigerian-food'>
            <div className='cake-food-img'>
            </div>
            <div className='nigerian-food-details cake animate__animated animate__slideInUp animate__delay-1s'>
                <h2>Cake</h2>
                <div className='cake-price'>
                    <h1>Call in for Price</h1>
                    <p>Different cake design comes with Different prices</p>
                </div>
                
                
            </div>
            <div className='cake-food-img-2'>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Cakes