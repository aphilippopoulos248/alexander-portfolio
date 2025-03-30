import React from 'react'
import './Hero.css'
import profile_img from '../../assets/AlexProfile.png'
import VideoComponent from '../video/VideoComponent'; 

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Welcome</span> to my portfolio!</h1>
        <p>Hello! My name is <span>Alexander Philippopoulos</span>. I'm a <span>game developer</span> based in the Greater Toronto Area. 
        I specialize in <span>gameplay programming</span>.
        My dream is to develop fun and creative games that will bring joy and inspiration to people around the world.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
        <div className="video-section">
          <VideoComponent />
        </div>
    </div>
  )
}

export default Hero