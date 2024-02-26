import React from "react";
import LeftImg from "../../../../assets/home/right-img2.png"
import RightImg from "../../../../assets/home/right-img.png"
import './heroSection.css'
import Client1 from "../../../../assets/home/client1.png"
import Client2 from "../../../../assets/home/client2.png"
import Client3 from "../../../../assets/home/client3.png"
import Client4 from "../../../../assets/home/client4.png"
import SalaryImg from "../../../../assets/home/salary.png"
import ProjectShapeImg from "../../../../assets/home/project-shape.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <section className="home-hero-section">
      <div className="home-hero-left">
        <div className="home-hero-left-container">
          <h5 className="home-hero-left-container-title">
            Help The Poor Children
          </h5>
          <h2 className="home-hero-left-container-subtitle">
            Your Marcy Can Change Someone's Life
          </h2>
          <p className="home-hero-left-container-description">
            We help local nonprofits access the funding, tools, training, and
            support they need to become more.
          </p>
          <button className="home-hero-left-container-button">
            Get Started
          </button>
        </div>
      </div>
      <div className="home-hero-right">
        <div className="home-hero-right-left">
          <div className="home-hero-right-left-img">
            <img src={LeftImg} alt="Img"/>
          </div>
          <div className="home-hero-right-left-slider">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img src={Client1} alt="Img"/>
                </div>
                <div>
                  <img src={Client2} alt="Img"/>
                </div>
                <div>
                  <img src={Client4} alt="Img"/>
                </div>
                <div>
                  <img src={Client3} alt="Img"/>
                </div>
                <div>
                  <img src={Client2} alt="Img"/>
                </div>
                <div>
                  <img src={Client4} alt="Img"/>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="home-hero-right-right">
          <div className="home-hero-right-right-container">
            <div className="home-hero-right-right-projects">
              <div className="home-hero-right-right-projects-img">
                <img src={SalaryImg} alt="Img"/>
              </div>
              <div className="home-hero-right-right-projects-text">
                <div className="project-number">
                  252+
                </div>
                <div className="total-projects">
                  <p>Total Projects</p>
                </div>
              </div>
            </div>
            <div className="project-shape">
              <img src={ProjectShapeImg} alt="Img"/>           
            </div>
          </div>
          <div className="home-hero-right-right-img">
            <img src={RightImg} alt="Img"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
