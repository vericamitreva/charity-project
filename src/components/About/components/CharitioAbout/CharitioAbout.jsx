import React, { useState, useEffect } from 'react'
import Aboutimg from "./about-2.png"
import "./charitioabout.css"
import { IoWalletSharp } from "react-icons/io5"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const AboutSection = () => {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation(prevRotation => prevRotation + 1)
        }, 10)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="charitio-about-section">
            <div className="charitio-about-container">
                <div className="charitio-left-section">
                    <div className="round-ball-1"></div>
                    <div className="round-ball-2"></div>
                    <div className="round-ball-3"></div>
                    <div className="round-ball-4"></div>
                    <div className="charitio-about-image-container">
                        <img src={Aboutimg} alt="" className="charitio-about-img" />
                    </div>
                    <div className="total-raised">
                        <div className="total-raised-wrap">
                            <div className="total-raised-icon">
                            <IoWalletSharp style={{fontSize: "20px",color: "#ef5f34", verticalAlign: "middle"}}/>
                            </div>
                            <div className="total-raised-text">
                                <div className="total-raised-heading">
                                    <h2 className='total-raised-h2'>Total raised.</h2>
                                    <span className='total-raised-number'>$25000</span>
                                </div>
                                <div className="total-raised-progress">
                                <div className="progress-container"> 
                                    <div className="percentage"></div> 
                                </div> 

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-right-section">
                    <div className="right-section-container">
                    <span className="about-us">About Us</span>
                    <h2 className="about-right-heading">We Can Save More Life's With Your Helping Hand.</h2>
                    <p className="about-right-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                    <ul className="home-about-list">
                        <li className="about-list-item"><span><IoMdCheckmarkCircleOutline color='#ef5f34' size={22}/></span>The standard chunk of Lorem Ipsum used since.</li>
                        <li className="about-list-item"><span><IoMdCheckmarkCircleOutline color='#ef5f34' size={22}/></span>Randomised words which don't look even slightly believable.</li>
                        <li className="about-list-item"><span><IoMdCheckmarkCircleOutline color='#ef5f34' size={22}/></span>Making this the first true generator on the Internet.</li>
                        <li className="about-list-item"><span><IoMdCheckmarkCircleOutline color='#ef5f34' size={22}/></span>The first true generator on the Internet Making this.</li>
                    </ul>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutSection
