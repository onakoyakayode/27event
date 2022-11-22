
import React from 'react'
// import Dashboard from '../../Dashboard/Dashboard'
import { AddToCart } from '../../../Icon';
import './meal.css'

const Breakfast = ({food}) => {
 
  return (
    <div className='meal animate__animated animate__slideInLeft animate__delay-1s'>
        <div className='meal-image'>
            <img src={food.image} alt="breakfast" />
        </div>
        <h1>{food.title}</h1>
        <span>{food.kcal} kcal</span>
        <div className='price'>
            <h4>₦{food.price}</h4>
            <AddToCart />
        </div>
    </div>
  )
}

export default Breakfast;