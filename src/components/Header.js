import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'


// 
const Header = () => {
 
  
  return (
    
      <div className={` p-8 lg:pr-16 h-auto md:h-screen  pt-3 flex flex-col relative z-20 bg-transparent`}>
        <NavBar/>
        <Banner/>
    </div>
  )
}

export default Header