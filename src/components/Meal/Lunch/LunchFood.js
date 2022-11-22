import React from 'react'
import LunchMeal from '../../LunchMeal/LunchMeal'
import Lunch from './Lunch'

const LunchFood = () => {
  return (
    <div className='food'>
        {LunchMeal.map((food, index) => <Lunch key={index} food={food}/>)}
    </div>
  )
}

export default LunchFood