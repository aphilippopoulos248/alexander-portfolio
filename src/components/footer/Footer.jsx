import React from 'react'
import './Footer.scss'
import footer_logo from '../../assets/ap-logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Thank you for looking at my portfolio!</p>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
            </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Alexander Philippopoulos. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer