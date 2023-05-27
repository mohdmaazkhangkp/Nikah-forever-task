import React from 'react';
import video from '../assets/video.mp4'
const BackgroundVideo = () => {
    return (
        <div className="bg-black">
            <video
                autoPlay
                loop
                muted
                className="h-screen w-screen object-cover absolute top-0 left-0 z-10"
            >
                <source src={video} type="video/mp4" />
            </video>
            {/* Add the rest of your content here */}
        

export default BackgroundVideo;