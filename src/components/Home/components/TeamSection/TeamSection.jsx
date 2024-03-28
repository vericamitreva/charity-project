import "./teamSection.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Team1 from "./../../../../assets/home/team-1.jpg"
import Team2 from "./../../../../assets/home/team-2.jpg"
import Team3 from "./../../../../assets/home/team-3.jpg"
import Team4 from "./../../../../assets/home/team-4.jpg"
import Team5 from "./../../../../assets/home/team-5.jpg"
import Team6 from "./../../../../assets/home/team-6.jpg"
import { useState } from "react";
import { useEffect } from "react";


export default function TeamSection() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
    }

    return (
        <section>
            <div className="team-section-container">
                <div className="text-container">
                    <span> Expert Team </span>
                    <h2> Meet Our Volunteer Team </h2>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. </p>
                </div>
                <div className="slider-container">
                    <div className="slider">
                        <Slider {...settings}>
                            <div className="image-container">
                                <img src={Team1} alt="Img"/>
                                <div className="name-container">
                                    <a href="/">Angelical Laura</a>
                                    <p>Volunteer</p>
                                </div>
                            </div>
                            <div className="image-container">
                                <img src={Team2} alt="Img"/>
                                <div className="name-container">
                                    <a href="/">Maria Belizean</a>
                                    <p>Volunteer</p>
                                </div>
                            </div>
                            <div className="image-container">
                                <img src={Team3} alt="Img"/>
                                <div className="name-container">
                                    <a href="/">Robert Churls</a>
                                    <p>Team Leader</p>
                                </div>
                            </div>
                            <div className="image-container">
                                <img src={Team4} alt="Img"/>
                                <div className="name-container">
                                    <a href="/">William Frost</a>
                                    <p>Volunteer</p>
                                </div>
                            </div>
                            <div className="image-container">
                                <img src={Team5} alt="Img"/>
                                <div className="name-container">
                                    <a href="/">Zanifer Marry</a>
                                    <p>Volunteer</p>
                                </div>
                            </div>
                            <div className="image-container">
                                <img src={Team6} alt="Img"/>
                                <div className="name-container">
                                    <a href="/">Devid Harmin</a>
                                    <p>Volunteer</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}