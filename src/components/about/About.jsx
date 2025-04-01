import React from 'react'
import './About.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/AlexAbout.png'
import cpp from '../../assets/cpp.svg'
import cs from '../../assets/cs.svg'
import java from '../../assets/java.svg'
import javascript from '../../assets/javascript.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"

const About = () => {
    useEffect(() => {
      AOS.init({})
    }, [])
  return (
    <div id='about' className='about'>
        <div className="about-title" data-aos="fade-up">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left" data-aos="fade-right" data-aos-delay="300">
              <img src={profile_img} alt="" />
          </div>
          <div className="about-right" data-aos="fade-left" data-aos-delay="600">
            <div className="about-para">
              <p>Ever since I was 5 years old, I loved playing video games. My first games I played were mobile games on my iPad. I then developed a love for computer games and console games.</p>
              <p>When I was 13, I got my very first phone. It was a samsung galaxy, and I fell in love with it. I enjoyed listening to music and watching YouTube videos on my phone. I began to realize how precious our mobile devices can really be.</p>
              <p>Although I mainly code for games, I also have experience making websites and mobile applications with Java and Javascript. This very website was coded with React JS.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <img src={cpp} alt="" />
              </div>
              <div className="about-skill">
                <img src={cs} alt="" />
              </div>
              <div className="about-skill">
                <img src={java} alt="" />
              </div>
              <div className="about-skill">
                <img src={javascript} alt="" />
              </div>
              <div className="about-skill">
                <img src={html} alt="" />
              </div>
              <div className="about-skill">
                <img src={css} alt="" />
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default About