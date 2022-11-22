import React from 'react'
import './Order.css'
import order from '../../icon/order.png'
import cooking from '../../icon/cooking.png'
import delivery from '../../icon/delivery.png'

const Order = () => {
  return (
    <div className='order'>
        <div className='order-step'>
            <div className='order-image'>
                <img src={order} alt="order-menu" />
            </div>
            <div className='order-num'>
                <h2>1</h2>
            </div>
            <h2>Order a menu</h2>
            <p>Our website offers a weekly menu. There is always something new to try!</p>
        </div>
        <div className='order-step'>
            <div className='order-image'>
                <img src={cooking} alt="freshly cook" />
            </div>
            <div className='order-num'>
                <h2>2</h2>
            </div>
            <h2>Freshly Cooked</h2>
            <p>Let the food come to you directly from our kitchen. No traffic problem, no time wasted</p>
        </div>
        <div className='order-step'>
            <div className='order-image'>
                <img src={delivery} alt="delivery" />
            </div>
            <div className='order-num'>
                <h2>3</h2>
            </div>
            <h2>Delivered to you</h2>
            <p>We deliver your meals to your place so thar your hectic shedule is not disrupted</p>
        </div>
    </div>
  )
}

export default Order