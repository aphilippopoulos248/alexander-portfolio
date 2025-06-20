import React from 'react'
import './AI.scss'
import VideoComponent from '../../video/VideoComponent.jsx'
import AI_Data from '../../../data/ai_data.js'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

const AI = () => {
   const wideScreenThreshold = 1200;
     const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > wideScreenThreshold); // Initialize with the current screen width
   
     // Detect screen resize to update isWideScreen state
     // Returns true if window.innerWidth superpasses wideScreenThreshold
     useEffect(() => {
       const handleResize = () => {
         setIsWideScreen(window.innerWidth > wideScreenThreshold);
       };
   
       window.addEventListener('resize', handleResize);
       return () => window.removeEventListener('resize', handleResize);
     }, []);
   
     useEffect(() => {
       AOS.init({
         offset: isWideScreen ? -800 : -100,
       })
     }, [isWideScreen])
    return (
    <div className='ai'>
        <div className="ai-title" data-aos="fade-up">
            <h1>My AI</h1>
        </div>
        {/* <div className="video-component" data-aos="fade-up" data-aos-delay="300">
            <h2>Watch my game highlights</h2>
            < VideoComponent className="video"/>
        </div> */}
        <div className="ai-container" data-aos="fade-up" data-aos-delay="300">
            {AI_Data.map((ai, index)=>{ 
                return <div className="ai-box">
                <h2>{ai.a_name}</h2>
                <a href={ai.a_link}><img key={index} src={ai.a_img} alt="" /></a>
                </div>
            })}
        </div>
    </div>
  )
}

export default AI
