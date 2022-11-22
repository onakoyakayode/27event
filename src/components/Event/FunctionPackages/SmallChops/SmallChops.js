import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import './SmallChops.css'

const SmallChops = ({openModal, setOpenModal}) => {
  return (
    <>
        <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
        <div className='nigerian-food'>
            <div className='small-chops-food-img'>
            </div>
            <div className='nigerian-food-details animate__animated animate__slideInUp animate__delay-1s'>
                <h2>Small Chops</h2>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Mini Package</h4>
                        <h4>₦500 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>1 Spring Roll</li>
                        <li>1 Samosa</li>
                        <li>3 PuffPuff</li>
                        <li>1 Peppered Beef</li>
                    </ul>
                </div>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Medium Package</h4>
                        <h4>₦900 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>2 Spring Roll</li>
                        <li>2 Samosa</li>
                        <li>5 PuffPuff</li>
                        <li>1 Peppered Gizzard/Chicken</li>
                    </ul>
                </div>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Large Package</h4>
                        <h4>₦1,500 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>2 Spring Roll</li>
                        <li>2 Samosa</li>
                        <li>6 PuffPuff</li>
                        <li>2 Peppered Chicken</li>
                        <li>1 Gizzard</li>
                    </ul>
                </div>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Silver Package</h4>
                        <h4>₦2,000 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>3 Spring Roll</li>
                        <li>3 Samosa</li>
                        <li>10 PuffPuff</li>
                        <li>2 Peppered Chicken</li>
                        <li>3 Gizzard</li>
                        <li>2 Pancake</li>
                    </ul>
                </div>
                <div className='nigerian-food-price'>
                    <div className='nigerian-food-price-options'>
                        <h4>Gold Package</h4>
                        <h4>₦3,000 per guest</h4> 
                    </div>
                    <h5>A selection of;</h5>
                    <ul>
                        <li>5 Spring Roll</li>
                        <li>5 Samosa</li>
                        <li>15 PuffPuff</li>
                        <li>2 Peppered Chicken</li>
                        <li>3 Gizzard</li>
                        <li>2 Pancake</li>
                    </ul>
                </div>
            </div>
            <div className='small-chops-food-img-2'>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default SmallChops