import React from 'react'
import './Hero.scss'
import profile_img from '../../assets/AlexProfile.png'
import VideoComponent from '../video/VideoComponent';
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"

const Hero = () => {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <div id='home' className='hero'>
      <h1 data-aos="fade-up">Welcome!</h1>
        <img src={profile_img} alt="" data-aos="fade-up" data-aos-delay="300"/>
        <p>Hello! My name is <span>Alexander Philippopoulos</span>. I'm a <br></br>
          <div className="type-animation">
             <TypeAnimation
              sequence={[
                "Game Developer",
                2000, 
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        <br></br> based in the <span>Greater Toronto Area</span>.</p>
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