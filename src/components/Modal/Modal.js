import React, { useRef, useState } from 'react'
import './Modal.css'

const Modal = ({ openModal, onClose }) => {
    const inputRef = useRef()
    const [value, setValue] = useState({
        menu: ''
    })
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        menu: "",
        guest: "",
        date: "",
        time: "",
        cake: "",
    })

    console.log(formData)
    if(!openModal) return null;


    const handleSelect = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
       
    }

    const handleMenu = (event) => {
        setValue(prevValue => {
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            }
        })
    }


  return (
    <div onClick={onClose} className='modal'>
       {openModal && 
       
            <div onClick={(e) => {
                e.stopPropagation()
            }} className='modal-overlay animate__animated animate__zoomInRight'>
                <p onClick={onClose} className='closeBtn'>x</p>
                <form className='form' action="https://formsubmit.co/el/nesowe" method='POST' encType='text/plain'>
                    <h2>Book your event</h2>
                    <div className='form-container'>
                        <div className='fullName'>
                            <input type='text' onChange={handleSelect} value={formData.firstName} className='firstName' placeholder='First Name' name='firstName'required />
                            <input type='text' onChange={handleSelect} value={formData.lastName} className='lasttName' placeholder='Last Name' name='lastName' required/>
                        </div>
                        <div className='contact-details'>
                            <input type='email' ref={inputRef} onChange={handleSelect} value={formData.email} className='client-mail' placeholder='Enter email address' name='email' required/>
                            <input type='tel' id='phone' onChange={handleSelect} ref={inputRef} value={formData.phone} className='client-phone' placeholder='080-808-1234' name='phone' required/>
                        </div>
                        <div className='location'>
                            <input type='text' id='location' ref={inputRef} onChange={handleSelect} value={formData.location} name='location' placeholder='Address' className='location' />
                        </div>
                        <div className='guest'>
                            <select name='menu' ref={inputRef} onSelect={handleSelect} value={formData.value} id='menu'>
                                <option value=''>Menu</option>
                                <optgroup name='menu' ref={inputRef} onSelect={handleSelect}  label='Nigerian Dish'>
                                    <option value='Nigerian Dish Option 1'>Option 1</option>
                                    <option value='Nigerian Dish Option 2'>Option 2</option>
                                </optgroup>
                                <optgroup label='Intercontinental Dish'>
                                    <option value='Nigerian Dish Option 1'>Option 1</option>
                                    <option value='Nigerian Dish Option 2'>Option 2</option>
                                </optgroup>
                                <optgroup label='Local Dish'>
                                    <option value='Local Dish Option 1'>Option 1</option>
                                    <option value='Local Dish Option 2'>Option 2</option>
                                    <option value='Local Dish Option 3'>Option 3</option>
                                    <option value='Local Dish Option 4'>Option 4</option>
                                </optgroup>
                                <optgroup label='Small Chops'>
                                    <option value='Mini Package'>Mini Package</option>
                                    <option value='Medium Package'>Medium Package</option>
                                    <option value='Large Package'>Large Package</option>
                                    <option value='Silver Package'>Silver Package</option>
                                    <option value='Gold Package'>Gold Package</option>
                                </optgroup>
                                <optgroup  label='Cakes'>
                                    <option name="cake" onSelect={handleMenu} value={value.cake}>Call for Price</option>
                                </optgroup>
                            </select> 
                            <input type='number' ref={inputRef} onChange={handleSelect} value={formData.guest} id='guest' name='guest' placeholder='Num of Guest' />
                        </div>
                        <div className='contact-details dateTime'>
                            <input type='date' onChange={handleSelect} value={formData.date} className='client-date' placeholder='pick date' name='date' />
                            <input type='time' onChange={handleSelect} value={formData.time} id='time' className='client-time' placeholder='Time' name='time' />
                        </div>
                        <input type="hidden" name="_subject" value="New Order!" />
                    </div>

                    <button type='submit' className='btn-sbmt'>Submit</button>

                </form>
            </div>
       }
       
    </div>
  )
}

export default Modal