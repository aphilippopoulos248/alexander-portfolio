import React from 'react'
import './Projects.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../data/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projects-title" data-aos="fade-up">
            <h1>My Projects</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="projects-container" data-aos="fade-up" data-aos-delay="300">
            {mywork_data.map((work, index)=>{
                return <a href={work.w_link}><img key={index} src={work.w_img} alt="" /></a>
            })}
        </div>
        {/* <div className="projects-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt=""></img>
        </div> */}
    </div>
  )
}

export default Projects