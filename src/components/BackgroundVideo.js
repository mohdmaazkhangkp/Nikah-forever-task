import React from 'react';
import video from '../assets/video.mp4'
const BackgroundVideo = ({ handleVideoLoad }) => {
    return (
        <div className="bg-black">
            <video
                autoPlay
                loop
                muted
                className=" h-full w-screen object-cover absolute top-0 left-0 z-10"
                onCanPlayThrough={handleVideoLoad}
            >
                <source src="https://drive.google.com/uc?export=download&id=1u1T-c8weDK4bLbZdWTtHh_ydHJDp34Ft" type="video/mp4" />
            </video>
           
        </div>
    );
};

export default BackgroundVideo;