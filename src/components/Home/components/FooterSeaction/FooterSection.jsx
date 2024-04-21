import "./footerSection.css"
import Logo from "./../../../../assets/home/logo.png"
import { TfiEmail } from "react-icons/tfi";
import { PiDeviceMobile } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function FooterSection () {
    return (
        <section className="footer-section-container">
            <div className="footer-about-container"> 
                <div className="column">
                    <img src={Logo}></img>
                    <p> Welcome and open yourself to your truest love this year with us! With the Release Process </p>
                    <div className="socials">
                        <div className="icon"><a href="/"><FaFacebookF/></a></div>
                        <div className="icon"><a href="/"><FaTwitter/></a></div>
                        <div className="icon"><a href="/"><FaLinkedinIn/></a></div>
                        <div className="icon"><a href="/"><FaPinterestP/></a></div>
                    </div>
                </div>
                <div className="column column-link">
                    <h3> Quick Link </h3>
                    <div className="inner-column">
                        <a href="/"> About Us </a> 
                        <a href="/"> Causes </a> 
                        <a href="/"> Events </a> 
                        <a href="/"> Volunteer </a> 
                        <a href="/"> Contact </a> 
                    </div>
                </div>
                <div className="column">
                    <h3> Our Address </h3>
                    <div className="inner-column">
                        <p> Would you have any enquiries. Please feel free to contact us </p>
                        <div className="address-column"> 
                            <div className="column-row">
                                <TfiEmail/>
                                <p>charito@gmail.com</p>
                            </div>
                            <div className="column-row">
                                <PiDeviceMobile/>
                                <p>+888 (123) 869523</p>
                            </div>
                            <div className="column-row">
                                <SlLocationPin/>
                                <p>New York – 1075 Firs Avenue</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h3> Newsletter </h3>
                    <p>You will be notified when somthing new will be appear.</p>
                    <div className="email-submit">
                        <input type="email" name="EMAIL" placeholder="Email Address *" className="email-input" required/>
                        <button type="submit" className="submit-button"><RiArrowRightSLine/></button>
                    </div>
                </div>
            </div>
            <div className="footer-label-container">
                <p> © Copyright 2024 | <a href="/"> Charitio - Charity WordPress Theme </a>  | All right reserved. </p>
            </div>
        </section>
    )
}