import React from 'react'
import './Offers.css'
import excusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <p>Only on best sellers products</p>
            <button>Check now</button>
        </div>
        <div className='offers-right'>
            <img src={excusive_image} alt=""/>
        </div>
    </div>
  )
}

export default Offers