import React from 'react'
import './Games.scss'
import VideoComponent from '../../video/VideoComponent.jsx'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"

const Games = () => {
    useEffect(() => {
        AOS.init({})
        }, [])
    return (
    <div className='games'>
        <div className="games-title" data-aos="fade-up">
            <h1>My Games</h1>
        </div>
        <div className="video-component">
          < VideoComponent/>
        </div>
    </div>
  )
}

export default Games
