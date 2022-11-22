import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import './IntercontinentalDish.css'

const IntercontinentalDish = ({openModal, setOpenModal}) => {
  return (
    <>
      <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
      <div className='nigerian-food'>
        <div className='intercontinental-food-img'>
        </div>
        <div className='nigerian-food-details animate__animated animate__slideInUp animate__delay-1s'>
          <h2>Intercontinental Dish</h2>
          <div className='nigerian-food-price'>
              <div className='nigerian-food-price-options'>
                <h4>Option 1</h4>
                <h4>₦4,000 per guest</h4> 
              </div>
              <h5>A selection of;</h5>
              <ul>
                <li>Buttered Parsley Potatoes</li>
                <li>Beef Steak</li>
                <li>Gravy</li>
                <li>Steamed Veggies</li>
              </ul>
          </div>
          <div className='nigerian-food-price'>
              <div className='nigerian-food-price-options'>
                <h4>Option 2</h4>
                <h4>₦4,000 per guest</h4> 
              </div>
              <h5>A selection of;</h5>
              <ul>
                <li>Spaghetti Bolgnese</li>
                <li>Veggies</li>
                <li>Meatballs in Sauce</li>
                <li>Honey Glazed Chicken</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='intercontinental-food-img-2'>
      </div>
      <Footer />
    </>
  )
}

export default IntercontinentalDish