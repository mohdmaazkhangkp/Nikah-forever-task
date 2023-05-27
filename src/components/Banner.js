import React from 'react'
import heart from '../assets/heart.png'
import Form from './Form'
const Banner = () => {
  return (
    <div className='flex gap-40 flex-1 pt-2'> 
      <div className='flex-[2] flex flex-col items-center   text-5xl font-extrabold text-white leading-tight '>
        <img className='w-[440px]' alt="banner" src={heart}/>
        <h2 >India's #1 Muslim</h2>
        <h2>Matrimony Website</h2>
      </div>
      <div className='flex-[1.2] pt-2'>
        <Form/>
      </div>
    </div>
  )
}

export default Banner