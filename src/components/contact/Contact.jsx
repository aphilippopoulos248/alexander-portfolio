import React from 'react'
import './Contact.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/icons8-linkedin.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title" data-aos="fade-up">
            <h1>Contact Me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="contact-section">
            <div className="contact-left" data-aos="fade-right" data-aos-delay="300">
                <h1>Let's Talk</h1>
                <p>I'm currently available to help with any projects, so feel free to reach out to me.</p>
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>alexanderphilippopoulos@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>647-975-2248</p>
                </div>
                <div className="contact-detail">
                    <img src={linkedin_icon} alt="" /> <p>My LinkedIn</p>
                </div>
            </div>
            <form className="contact-right" data-aos="fade-left" data-aos-delay="600">
                <label htmlFor="">Your Name</label>
                <input type="text"placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email"placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact