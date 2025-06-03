import React from 'react'
import './Websites.scss'
import VideoComponent from '../../video/VideoComponent.jsx'
import Websites_Data from '../../../data/websites_data.js'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

const Websites = () => {
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
    <div className='websites'>
        <div className="websites-title" data-aos="fade-up">
            <h1>My Websites</h1>
        </div>
        {/* <div className="video-component" data-aos="fade-up" data-aos-delay="300">
            <h2>Watch my game highlights</h2>
            < VideoComponent className="video"/>
        </div> */}
        <div className="websites-container" data-aos="fade-up" data-aos-delay="300">
            {Websites_Data.map((website, index)=>{ 
                return <div className="websites-box">
                <h2>{website.w_name}</h2>
                <a href={website.w_link}><img key={index} src={website.w_img} alt="" /></a>
                </div>
            })}
        </div>
    </div>
  )
}

export default Websites
