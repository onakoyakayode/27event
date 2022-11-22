import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import './LocalDish.css'

const LocalDish = ({openModal, setOpenModal}) => {
  return (
    <>
        <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
        <div className='nigerian-food'>
            <div className='local-food-img'>
            </div>
            <div className='nigerian-food-details animate__animated animate__slideInUp animate__delay-1s'>
                <h2>Local Dish</h2>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Option 1</h4>
                        <h4>₦3,500 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>Pounded Yam</li>
                        <li>Egusi Soup/Edika Ikong/Efo Riro</li>
                        <li>Snail or Stock Fish</li>
                        <li>Fresh Fish or Assorted Meat</li>
                    </ul>
                </div>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Option 2</h4>
                        <h4>₦3,500 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>Amala</li>
                        <li>Ewedu/Gbegiri</li>
                        <li>Goat Meat or Bush Meat</li>
                        <li>Assorted Meat</li>
                    </ul>
                </div>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Option 3</h4>
                        <h4>₦3,500 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>Yam Pottage</li>
                        <li>Efo Riro</li>
                        <li>Fresh Fish or Stock Fish</li>
                        <li>Peppered Chicken</li>
                    </ul>
                </div>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Option 4</h4>
                        <h4>₦3,500 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>Beans (Ewa Aganyin)</li>
                        <li>Dodo</li>
                        <li>Stock Fish or Snails</li>
                        <li>Chicken</li>
                    </ul>
                </div>
            </div>
            <div className='local-food-img-2'>
            </div>
        </div>
        
        <Footer />
    </>
  )
}

export default LocalDish