import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa"

import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="newletter-section">
        <div className="newletter-content">
            <span className='small-text'>Newsletter</span>
            <span className="big-text">Sign up for lastest updates and offers</span>
            <div className="form">
                <input type="text" placeholder='Email Adress' />
                <button>Subcribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>
                <div className="icon">
                    <FaTwitter size={14}/>
                </div>
            </div>
        </div>
    </div>
  )
}


