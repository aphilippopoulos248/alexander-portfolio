import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="projects-container">
            {mywork_data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" />
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