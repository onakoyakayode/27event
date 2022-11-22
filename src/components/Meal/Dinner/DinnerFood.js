import React from 'react'
import DinnerMeal from '../../DinnerMeal/DinnerMeal'
import Dinner from './Dinner'

const DinnerFood = () => {
  return (
    <div className='food'>
        {DinnerMeal.map((food, index) => <Dinner key={index} food={food} />)}
    </div>
  )
}

export default DinnerFood