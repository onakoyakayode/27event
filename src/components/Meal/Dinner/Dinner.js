import React from 'react'
import { AddToCart } from '../../../Icon';


const Dinner = ({food}) => {
  return (
    <div className='meal animate__animated animate__slideInLeft animate__delay-1s'>
        <div className='meal-image'>
            <img src={food.image} alt="lunch" />
        </div>
        <h1>{food.title}</h1>
        <span>{food.kcal} kcal</span>
        <div className='price'>
            <h4>₦ {food.price}</h4>
            <AddToCart />
        </div>
    </div>
  )
}

export default Dinner