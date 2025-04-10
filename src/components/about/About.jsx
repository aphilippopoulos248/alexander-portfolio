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
import unity from '../../assets/unity.svg'
import unrealEngine from '../../assets/unreal-engine.svg'
import blender from '../../assets/blender.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node.svg'
import dotNetCore from '../../assets/dot-net-core.svg'
import android from '../../assets/android.svg'
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
          {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-sections">
          <div className="about-left" data-aos="fade-right" data-aos-delay="300">
              <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para" data-aos="fade-left" data-aos-delay="600">
              {/* <p>Ever since I was 5 years old, I loved playing video games. My first games I played were mobile games on my iPad. I then developed a love for computer games and console games.</p>
              <p>When I was 13, I got my very first phone. It was a samsung galaxy, and I fell in love with it. I enjoyed listening to music and watching YouTube videos on my phone. I began to realize how precious our mobile devices can really be.</p>
              <p>I realized that my new found passion for technology was what led me to following the path to creating digital media. I learned a variety of programming languages, libraries, and softwares that helped me on my developer journey. If I learned anything, its that you never stop learning.</p> */}
              <p>My journey in development began at the age of 20, when I applied to college for Computer Programming and Analysis.</p>
              <p>My first programming language was C#, and it quickly became one of my favorite languages to code in. I used C# to make a variety of software applications, primarily games. I made my first game with the .Net framework MonoGame, and eventually with Unity. I later learned C++ to make games with Unreal Engine.</p>
              <p>As I continued to learn programming, I learned how to make websites with HTML, CSS, and JavaScript. I quickly picked up on frameworks such as React, Angular, and ASP.Net. I utilized databases such as MongoDB, MySQL, and SQL Server Management Studio for managing data and authentication.</p>
              <p>I eventually learned how to make mobile apps with Java, using Android Studio. I utlized FireBase for authenticating users and storing data. I learned how to connect API endpoints to use data from external databases.</p>
            </div>
            <div className="about-skills" data-aos="fade-up" data-aos-delay="900">
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
              <div className="about-skill">
                <img src={unity} alt="" />
              </div>
              <div className="about-skill">
                <img src={unrealEngine} alt="" />
              </div>
              <div className="about-skill">
                <img src={blender} alt="" />
              </div>
              <div className="about-skill">
                <img src={react} alt="" />
              </div>
              <div className="about-skill">
                <img src={dotNetCore} alt="" />
              </div>
              <div className="about-skill">
                <img src={android} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About