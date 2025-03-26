import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Welcome</span> to my portfolio!</h1>
        <p>Hello! My name is Alexander Philippopoulos. I'm a game developer based in the Greater Toronto Area. 
        My dream is to develop fun and creative games that will bring joy and inspiration to people around the world.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero