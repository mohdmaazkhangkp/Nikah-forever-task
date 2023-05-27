import React, { lazy, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
const BackgroundVideo = lazy(() => import('./BackgroundVideo'))
// 
const Header = () => {
  const [isFastConnection, setIsFastConnection] = useState(false);

  useEffect(() => {
    const checkConnectionSpeed = () => {
      const connectionSpeedThreshold = 1; // Adjust this value to set the threshold for fast connection

      if (navigator.connection && navigator.connection.downlink) {
        const downlinkSpeed = navigator.connection.downlink; // it will represent internet speed in mbps
        setIsFastConnection(downlinkSpeed >= connectionSpeedThreshold);
      } else {
        // If the connection speed cannot be determined, assume it's a fast connection
        setIsFastConnection(true);
      }
    };

    checkConnectionSpeed();
  }, []);
  return (
    <>
      {isFastConnection && <BackgroundVideo/>}
   
      <div className={` pl-8 pr-16 h-screen  pt-3 flex flex-col relative z-20 ${isFastConnection ? "bg-black opacity-50" : "bg-gradient-to-r from-[#ff6032] to-[#ff5057] opacity-100"}`} >
      
        <NavBar/>
        <Banner/>
    </div>
    </>
  )
}

export default Header