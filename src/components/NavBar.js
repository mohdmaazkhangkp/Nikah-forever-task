import React from 'react'
import logo from "../assets/logo.png"
const NavBar = () => {
  return (
    <div className='flex items-center '>
      <div className='flex-[2]'><img className='w-64' alt="logo" src={logo}/></div>
      <div className=' flex-1 flex justify-between font-extrabold text-lg text-white items-center'>
        <h3 >FAQ</h3>
        <h3 >CONTACT</h3>
        <div className='bg-white h-min px-5 py-1 rounded-full border-4 border-red-300 text-red-800'>LOGIN</div>
      </div>
    </div>
  )
}

export default NavBar