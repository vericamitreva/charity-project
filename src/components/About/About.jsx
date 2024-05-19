import "./about.css"
import { useState } from 'react'
import AboutVideoImg from "../../assets/home/about-video.jpg"
import WidgetSection from "../Home/components/WidgetSection/WidgetSection"
import CharitioAbout from "./components/CharitioAbout/CharitioAbout"
import FunFact from "./components/FunFactSection/FunFact"
import CampaignsSection from "../Home/components/CampaignsSection/CampaignsSection"
import OurBlogSection from "../Home/components/OurBlogSection/OurBlogSection"
import Partners from "./components/Partners/Partners"

export default function About() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayButtonClick = () => {
        setIsVideoPlaying(true);
    };


    return (
    <div className="about-section">
        <div className="about-container">
            <div className="about-header">
                <div className="about-header-text">
                    <h2>About</h2>
                </div>
            </div>

            <div className="about-video-section">
                <div className="about-video-content">
                <div className="video-container">
                    {!isVideoPlaying ? (
                        <div className="video-cover" onClick={handlePlayButtonClick}>
                            <img src={AboutVideoImg} alt="Video Cover" className="cover-image" />
                            <div className="play-button">&#9658;</div>
                        </div>
                    ) : (
                        <div className="video-wrapper">
                            <iframe
                                width="560"
                                height="515"
                                src="https://www.youtube.com/embed/iSbzh0r9IV4?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
                <h2 className="video-heading">
                    See what we do for the <span>poor people and the children</span>
                </h2>
                </div>
            </div>

        </div>
        
        <WidgetSection />
        <CharitioAbout/>
        <FunFact/>
        <CampaignsSection/>
        <OurBlogSection/>
        <Partners/>
    </div>
    );
}