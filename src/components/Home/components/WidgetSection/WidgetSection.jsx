import React from 'react'
import "./widgetSection.css"
import Vegetable from "./../../../../assets/home/vegetable.png"
import WaterTap from "./../../../../assets/home/water-tap.png"
import Medicine from "./../../../../assets/home/medicine.png"
import GraduationCap from "./../../../../assets/home/graduation-cap.png"

const WidgetSection = () => {
  return (
    <section className='home-widget-section'>
        <div className='home-widget-section-container'>
            <div className='home-widget-section-widget'>
                <div className='home-widget-section-widget-bg'>
                    <div className='home-widget-section-widget-img'>
                        <img src={Vegetable} alt="Img"/>
                    </div>
                    <div className='home-widget-section-widget-text'>Healthy Food</div>
                </div>
            </div>
            <div className='home-widget-section-widget'>
                <div className='home-widget-section-widget-bg bg2'>
                    <div className='home-widget-section-widget-img'>
                        <img src={WaterTap} alt="Img"/>
                    </div>
                    <div className='home-widget-section-widget-text'>Clean Water</div>
                </div>
            </div>
            <div className='home-widget-section-widget'>
                <div className='home-widget-section-widget-bg bg3'>
                    <div className='home-widget-section-widget-img'>
                        <img src={Medicine} alt="Img"/>
                    </div>
                    <div className='home-widget-section-widget-text'>Medical Care</div>
                </div>
            </div>
            <div className='home-widget-section-widget'>
                <div className='home-widget-section-widget-bg bg4'>
                    <div className='home-widget-section-widget-img'>
                        <img src={GraduationCap} alt="Img"/>
                    </div>
                    <div className='home-widget-section-widget-text'>Child Education</div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default WidgetSection