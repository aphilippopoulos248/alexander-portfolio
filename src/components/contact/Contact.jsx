import React from 'react'
import './Contact.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from "../../assets/icons8-linkedin.svg"
import github_icon from "../../assets/icons8-github-48.svg"
import mail_icon from "../../assets/gmail.svg"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bfd6da2-f549-43cb-97d7-725c2535bb92");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form submitted successfully");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title" data-aos="fade-up">
        <h1>Contact Me</h1>
        {/* <img src={theme_pattern} alt=""/> */}
      </div>
      <div className="contact-section">
        <div className="contact-left" data-aos="fade-right" data-aos-delay="300">
          <h1>Reach Out!</h1>
          <p>I'm currently available to help with any projects, so feel free to reach out to me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:alexanderphilippopoulos@gmail.com">
                <img src={mail_icon} alt="Mail" />
              </a>
              <p>alexanderphilippopoulos@gmail.com</p>
            </div>
            <div className="contact-detail">
              <a href="tel:6479752248">
                <img src={call_icon} alt="Phone" width={45} />
              </a>
              <p>647-975-2248</p>
            </div>
            <div className="contact-detail">
              <a href="https://www.linkedin.com/in/alexander-philippopoulos-037268258/">
                <img src={linkedin_icon} alt="LinkedIn" />
              </a>
              <p>My LinkedIn</p>
            </div>
            <div className="contact-detail">
              <a href="https://github.com/aphilippopoulos248">
                <img src={github_icon} alt="GitHub" />
              </a>
              <p>My GitHub</p>
            </div>
          </div>

        </div>
        <form onSubmit={onSubmit} className="contact-right" data-aos="fade-left" data-aos-delay="600">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
          <button name="access_key" value="2bfd6da2-f549-43cb-97d7-725c2535bb92" type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact