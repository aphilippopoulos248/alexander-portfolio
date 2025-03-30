import React from 'react'
import './About.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/AlexAbout.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
              <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>Ever since I was 5 years old, I loved playing video games. My first games I played were mobile games on my iPad. I then developed a love for computer games and console games.</p>
              <p>I am a strong believer that games have many purposes in our lives. Not only do they help us relax and escape from stress, but they also bring people together. I wish to contribute to the game industry to make games that can truly make people happy.</p>
              <p>Although I mainly code for games, I also have experience making websites and mobile applications with Java and Javascript. This very website was coded with React JS.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>C++</p><hr style={{width:"90%"}}></hr>
              </div>
              <div className="about-skill">
                <p>C#</p><hr style={{width:"70%"}}></hr>
              </div>
              <div className="about-skill">
                <p>Javascript</p><hr style={{width:"45%"}}></hr>
              </div>
              <div className="about-skill">
                <p>HTML & CSS</p><hr style={{width:"50%"}}></hr>
              </div>
              <div className="about-skill">
                <p>Java</p><hr style={{width:"30%"}}></hr>
              </div>
            </div>
            
          </div>
        </div>
        {/* <div className="about-softwares">
            <div className="about-software">
              <h1>Unity</h1>
              <p>2D games and mobile games</p>
            </div>
            <hr />
            <div className="about-software">
              <h1>Unreal Engine</h1>
              <p>3D games with high-end graphics</p>
            </div>
            <hr />
            <div className="about-software">
              <h1>Blender</h1>
              <p>Importing/Modifying assets and animations</p>
            </div>
        </div> */}
    </div>
  )
}

export default About