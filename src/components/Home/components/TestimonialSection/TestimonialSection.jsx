import "./testimonial.css";
import Test1 from "./../../../../assets/home/test-1.jpg";
import Test2 from "./../../../../assets/home/test-2.jpg";
import Test3 from "./../../../../assets/home/test-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";

export default function TestimonialSection() {

  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 767) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
          slidesToScroll: 1
        }));
      } else {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 2,
          slidesToScroll: 1
        }));
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sliderSettings]);
 
  return (
    <section className="testimonial-section">
      <div className="testimonial-section-container">
        <div className="testimonial-heading-container">
          <span className="testimonial-title">Testimonial</span>
          <h2 className="testimonial-heading">What People Say About Us</h2>
          <p className="testimonial-paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>

        <div className="slider-wrapper">
          <Slider {...sliderSettings}>
            <div className="item-1">
              <div className="img-container">
                <img src={Test1} alt="img" />
              </div>
              <div className="content">
                <p className="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.</p>
                <h2 className="testimonial-name">William Robert</h2>
                <span className="testimonial-pos">CEO Of Ebrima</span>
              </div>
            </div>

            <div className="item-2">
              <div className="img-container">
                <img src={Test2} alt="img" />
              </div>
              <div className="content">
                <p className="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.</p>
                <h2 className="testimonial-name">Marry Jenefer</h2>
                <span className="testimonial-pos">CEO Of Golden Bravo</span>
              </div>
            </div>

            <div className="item-3">
              <div className="img-container">
                <img src={Test3} alt="img" />
              </div>
              <div className="content">
                <p className="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.</p>
                <h2 className="testimonial-name">Harverd Tommy</h2>
                <span className="testimonial-pos">Manager Of MNTR</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
