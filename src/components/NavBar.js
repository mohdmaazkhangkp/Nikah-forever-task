import React, { useState } from 'react'
import logo from "../assets/logo.png"
const NavBar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  return (
    <div className='flex  items-center text-white relative'>
      <div className='block lg:hidden cursor-pointer' onClick={() => setIsHamburgerClicked(prev=> !prev)}>
        <i class="fa-solid fa-bars fa-xl"></i>
      </div>
      <div className='flex-[2] flex justify-center lg:block cursor-pointer'><img className='w-64' alt="logo" src={logo}/></div>
      <div className={`flex-[1.2] py-16 lg:py-0 bg-white  text-black flex flex-col gap-8  justify-end font-extrabold text-lg items-center  absolute  ${isHamburgerClicked? "left-0" : "left-[-100vw]"} top-full w-full transition-all duration-300 ease-in-out lg:flex-row lg:gap-24 lg:text-white lg:bg-transparent lg:static`}>
        <h3 className='cursor-pointer'>FAQ</h3>
        <h3 className='cursor-pointer'>CONTACT</h3>
        <div className='bg-white h-min px-5 py-1 rounded-full border-[3px] border-red-300 text-red-800 cursor-pointer'>LOGIN</div>
      </div>
      
    </div>
  )
}

export default NavBar