import React from 'react'
import './Loaderpage.css'
import Image from '../images/27-event-logo.jpeg'

const LoaderPage = () => {
  return (
    <div className='loader-page'>
      <div className='page-content'>
        <img src={Image} alt='27Events' />
      </div>
    </div>
  )
}

export default LoaderPage;