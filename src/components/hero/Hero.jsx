import './Hero.scss'
import profile_img from '../../assets/AlexProfile.png'
import VideoComponent from '../video/VideoComponent';
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

const Hero = () => {
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
    <div id='home' className='hero'>
        <h1 data-aos="fade-up"><span>Welcome!</span></h1>
        <img src={profile_img} alt="" data-aos="fade-up" data-aos-delay="300"/>
        <p data-aos="fade-up" data-aos-delay="600">Hello! My name is <span>Alexander Philippopoulos</span>. I'm a <br></br>
          <div className="type-animation">
             <TypeAnimation
              sequence={[
                1000,
                "Game Developer",
                3000, 
                "Web Developer",
                3000,
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
            <div className="hero-connect" data-aos="fade-right" data-aos-delay="900">Connect with me</div>
            <div className="hero-resume" data-aos="fade-left" data-aos-delay="900">My resume</div>
        </div>
    </div>
  )
}

export default Hero