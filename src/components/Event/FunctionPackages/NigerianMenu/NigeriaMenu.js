import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import './NigeriaMenu.css'
import Footer from '../../../Footer/Footer'

const NigeriaMenu = ({openModal, setOpenModal}) => {
  return (
    <>
      <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
      <div className='nigerian-food'>
        <div className='nigerian-food-img'>
        </div>
        <div className='nigerian-food-details animate__animated animate__slideInUp animate__delay-1s'>
          <h2>Nigerian Dish</h2>
          <div className='nigerian-food-price'>
              <div className='nigerian-food-price-options'>
                <h4>Option 1</h4>
                <h4>₦3,500 per guest</h4> 
              </div>
              <h5>A selection of;</h5>
              <ul>
                <li>Jollof Rice</li>
                <li>Fried Rice</li>
                <li>Salad or Cole-slaw</li>
                <li>Stewed Beef or Fish</li>
                <li>Moin-Moin</li>
                <li>Peppered or Barbecue Chicken</li>
              </ul>
          </div>
          <div className='nigerian-food-price'>
              <div className='nigerian-food-price-options'>
                <h4>Option 2</h4>
                <h4>₦3,500 per guest</h4> 
              </div>
              <h5>A selection of;</h5>
              <ul>
                <li>Ofada Rice</li>
                <li>Ofada or Ayamashe Stew</li>
                <li>Dodo</li>
                <li>Diced Meat</li>
                <li>Fish</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='nigerian-food-img-2'>
      </div>
      <Footer />
    </>
    
  )
}

export default NigeriaMenu