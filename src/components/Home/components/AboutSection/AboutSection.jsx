import React, { useState, useEffect } from 'react';
import Aboutimg from "../../../../assets/home/about.jpg";
import "./aboutsection.css";
import { IoWalletSharp } from "react-icons/io5";

const AboutSection = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation(prevRotation => prevRotation + 1);
        }, 10);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="home-about-section">
            <div className="home-about-container">
                <div className="about-left-section">
                    <div className="square-1" style={{ transform: `rotateY(${rotation}deg)` }}></div>
                    <div className="square-2" style={{ transform: `rotateY(-${rotation}deg)` }}></div>
                    <div className="home-about-image-container">
                        <img src={Aboutimg} alt="" className="home-about-img" />
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
                                <div class="progress-container"> 
                                    <div class="percentage"></div> 
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
                        <li className="about-list-item">The standard chunk of Lorem Ipsum used since.</li>
                        <li className="about-list-item">Randomised words which don't look even slightly believable.</li>
                        <li className="about-list-item">Making this the first true generator on the Internet.</li>
                    </ul>

                    <a href="#" className="home-about-btn-link">
                        <button className="home-about-button">More About</button>
                    </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
