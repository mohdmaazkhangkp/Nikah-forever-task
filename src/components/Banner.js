import React from 'react'
import heart from '../assets/heart.png'
import Form from './Form'
const Banner = () => {
  return (
    <div className=' flex-1 pt-2 md:flex md:flex-row md:gap-4 lg:flex lg:gap-28 '> 
      <div className='h-[calc(100vh-85px)]  md:flex-[2] flex flex-col items-center justify-center md:justify-start  text-4xl sm:text-5xl font-extrabold text-white leading-tight '>
        <img className='w-[440px]' alt="banner" src={heart}/>
        <h2 >India's #1 Muslim</h2>
        <h2>Matrimony Website</h2>
      </div>
      <div className='md:flex-[1.2] py-2 flex justify-center '>
        <Form/>
      </div>
    </div>
  )
}

export default Banner