import React from 'react'
// import { AddToCart } from '../../../Icon'
import BreakfastMeal from '../../BreakfastMeal/BreakfastMeal'
import Dashboard from '../../Dashboard/Dashboard'
import Breakfast from './Breakfast'
import './Breakfast.css'

const BreakfastFood = () => {
  return (
    <div className='food'>
      {/* <div className='most-pop-meal'>
        <div className='most-pop-img'>
          <img src='https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-d225bf7/images/Nigerian-Food-Agege-Bread.jpg' alt='most popular meal' />
        </div>
        <button>Most Popular</button>
        <h1>Smoky Jollof Rice</h1>
        <span>468 Kcal</span>
        <div className='price'>
            <h4>₦ 4,800</h4>
            <AddToCart />
        </div>
      </div> */}
      <div className='breakfast-meal'>
        {BreakfastMeal.map((food, index) => <Breakfast key={index} food={food} />)}
      </div>
        
    </div>
  )
}

export default BreakfastFood