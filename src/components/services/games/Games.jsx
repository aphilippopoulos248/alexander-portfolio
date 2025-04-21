import React from 'react'
import './Games.scss'
import VideoComponent from '../../video/VideoComponent.jsx'
import Games_Data from '../../../data/games_data'
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
