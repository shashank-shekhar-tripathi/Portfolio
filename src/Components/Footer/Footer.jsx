import React from 'react'
import './Footer.css'
import logo from "../../assets/Shashank.svg"
import user_logo from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am a frontend developer from, India with 03 years of experience in many feilds like Designing and Editing .</p>
            </div>
            <div className="footer-top-right">
                <div className='footer-email-input'> 
                    <img src={user_logo} alt="" />
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>

        <hr /> {/*used for line */}

        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2025 Shashank Shekhar Tripathi. All rights reserved.</p>

            <div className="footer-bottom-right">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer