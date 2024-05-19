import React from 'react'
import "./contact.css"
import { FaHouseChimney } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import { FaPhone } from "react-icons/fa6"

export default function Contact() {

  return (
    <div>
      <div className='contact-section-container'>
        <div className='contact-section-header'>
          <div className='contact-section-header-text'>
            <h2>Contact</h2>
          </div>
        </div>
        <div className='contact-section-body'>
          <div className='contact-cards'>
            <div className='contact-card'>
              <div className='card-icon'><FaHouseChimney color='#5dc4b8' size={30}/></div>
              <div><h2>Address</h2></div>
              <div><p>7 Green Lake Street Crawfordsville, IN 47933</p></div>
            </div>
            <div className='contact-card'>
              <div className='card-icon'><IoMdMail color='#5dc4b8' size={30}/></div>
              <div><h2>Email Us</h2></div>
              <div><p>charitio@gmail.com</p></div>
              <div><p style={{marginTop: "0"}}>email@gmail.com</p></div>
            </div>
            <div className='contact-card'>
              <div className='card-icon'><FaPhone color='#5dc4b8' size={30}/></div>
              <div><h2>Call Now</h2></div>
              <div><p>+1 800 123 456 789</p></div>
              <div><p style={{marginTop: "0"}}>+1 800 123 789 456</p></div>
            </div>
          </div>
          <div className='get-in-touch'>
            <h2>Get In Touch</h2>
            <p>Customer Success agents have the sole goal of Making You Successful! That is why our dedicated support team works 24/7/365 to help you.</p>
          </div>
          <div className='contact-form'>
            <div className='contact-form-row'>
              <input placeholder='Your Name' required="true" type="text" name='text'></input>
              <input placeholder='Your Email' required="true" type="email" name='email'></input>
            </div>
            <div className='contact-form-row'>
              <input placeholder='Your Phone' required="true" type="phone" name='phone'></input>
              <input placeholder='Subject' required="true" type="subject" name='subject'></input>
            </div>
            <div className='contact-form-row'>
              <input className='contact-form-message' placeholder='Message' required="true" type="text" name='text'></input>
            </div>
            <button className='contact-submit-button'>Submit Now</button>
          </div>
        </div>
        <div className='contact-section-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5211.560631512847!2d-86.90781914948616!3d40.04185566571644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881329e05fe7e649%3A0x883e8648872984a6!2s7%20S%20Green%20St%2C%20Crawfordsville%2C%20IN%2047933%2C%20USA!5e0!3m2!1sen!2smk!4v1716116655987!5m2!1sen!2smk" title="map" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
