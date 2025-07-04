import React from 'react'
import './Services.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../data/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title" data-aos="fade-up">
            <h1>My Services</h1>
            {/* <img src={theme_pattern} alt=""/> */}
        </div>
        <div className="services-container" data-aos="fade-up" data-aos-delay="300">
            {Services_Data.map((service, index)=>{
                return <div className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <a href={service.s_link}>
                            <p>View More</p>
                            {/* <img src={arrow_icon} alt="" /> */}
                        </a>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services