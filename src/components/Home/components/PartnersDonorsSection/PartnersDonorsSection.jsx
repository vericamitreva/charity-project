import "./partnersDonorsSection.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Partner1 from "./../../../../assets/home/partner1.jpg"
import Partner2 from "./../../../../assets/home/partner2.jpg"
import Partner3 from "./../../../../assets/home/partner3.jpg"
import Partner4 from "./../../../../assets/home/partner4.jpg"
import Partner5 from "./../../../../assets/home/partner5.jpg"

export default function PartnersDonorsSection() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
              }
            }
          ]
    }

    return (
        <section>
            <div className="partner-team-section-container">
                <div className="partner-text-container">
                    <span> Who help us </span>
                    <h2> Our Partners & Donors </h2>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. </p>
                </div>
                <div className="partner-slider-container">
                    <div className="slider">
                        <Slider {...settings}>
                            <div className="partner-image-container">
                                <img src={Partner1} alt="Img"/>
                            </div>
                            <div className="partner-image-container">
                                <img src={Partner2} alt="Img"/>
                            </div>
                            <div className="partner-image-container">
                                <img src={Partner3} alt="Img"/>
                            </div>
                            <div className="partner-image-container">
                                <img src={Partner4} alt="Img"/>
                            </div>
                            <div className="partner-image-container">
                                <img src={Partner5} alt="Img"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}