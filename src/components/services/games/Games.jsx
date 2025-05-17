import React from 'react'
import './Games.scss'
import VideoComponent from '../../video/VideoComponent.jsx'
import Games_Data from '../../../data/games_data'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

const Games = () => {
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
    <div className='games'>
        <div className="games-title" data-aos="fade-up">
            <h1>My Games</h1>
        </div>
        <div className="video-component" data-aos="fade-up" data-aos-delay="300">
            <h2>Watch my game highlights</h2>
            < VideoComponent className="video"/>
        </div>
        <div className="games-container" data-aos="fade-up" data-aos-delay="300">
            {Games_Data.map((game, index)=>{ 
                return <div className="game-box">
                <h2>{game.g_name}</h2>
                <a href={game.g_link}><img key={index} src={game.g_img} alt="" /></a>
                </div>
            })}
        </div>
    </div>
  )
}

export default Games
