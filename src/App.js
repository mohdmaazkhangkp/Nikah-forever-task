import Header from "./components/Header";
import './App.css';
import { useEffect, useRef, useState } from "react";
import BackgroundVideo from "./components/BackgroundVideo";


function App() {

  const [showVideo, setShowVideo] = useState(true);
  const [videoLoadTimeout, setVideoLoadTimeout] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowVideo(false);
    }, 3000);

    setVideoLoadTimeout(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

 

  const handleVideoLoad = () => {
    clearTimeout(videoLoadTimeout);
  };

  return (
    <div className="bg-gradient-to-r from-[#ff6032] to-[#ff5057]">
      {showVideo && <BackgroundVideo handleVideoLoad={handleVideoLoad} />}
      <Header/>
    </div>
  );
}

export default App;
