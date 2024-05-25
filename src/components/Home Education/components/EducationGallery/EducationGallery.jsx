import './educationgallery.css'
import Img1 from './img-1.jpg'
import Img2 from './img-2.jpg'
import Img3 from './img-3.jpg'
import Img4 from './img-2-1.jpg'
import Img5 from './img-2-2.jpg'
import Img6 from './img-2-3.jpg'
import { AiFillPlusCircle } from "react-icons/ai";

export default function EducationGallery() {
    return(
        <div className="gallery-container">
            <div className="gallery-wrapper">
            <div className="gallery-row-1">
                <div className="row-1-big-img">
                    <div className="img-holder">
                        <img src={Img1} alt="" className='left-big-img' />
                        <div className="hover-content">
                        <AiFillPlusCircle style={{ color: 'white', fontSize: '35px'}}/>
                            <h4>School in Africa</h4>
                            <p>Why should I donate to Save the Children? I must explain to you how all this </p>
                        </div>
                    </div>
                </div>
                <div className="row-1-images">
                    <div className="small-img-holder">
                        <img src={Img2} alt="" className='row1-right-img'/>
                        <div className="hover-content">
                        <AiFillPlusCircle style={{ color: 'white', fontSize: '35px'}}/>
                        <h4>School In Ghana</h4>
                            <p>Education Charities in Ghana I must explain to you how all this mistaken idea of denouncing</p>
                        </div>
                    </div>

                    <div className="small-img-holder">
                        <img src={Img3} alt="" className='row1-right-img' />
                        <div className="hover-content">
                        <AiFillPlusCircle style={{ color: 'white', fontSize: '35px'}}/>
                        <h4>School In Nigeria</h4>
                            <p>Donate to help us transform schools I must explain to you how all this mistaken idea </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery-row-2">
                <div className="row-2-images">
                    <div className="small-img-holder">
                        <img src={Img4} alt="" className='row2-left-img' />
                        <div className="hover-content">
                        <AiFillPlusCircle style={{ color: 'white', fontSize: '35px'}}/>
                        <h4>School In Uganda</h4>
                            <p>Donate for Poor Child Education I must explain to you how all this mistaken idea of </p>
                        </div>
                    </div>

                    <div className="small-img-holder">
                        <img src={Img5} alt="" className='row2-left-img' />
                        <div className="hover-content">
                        <AiFillPlusCircle style={{ color: 'white', fontSize: '35px'}}/>
                        <h4>School In India</h4>
                            <p>Donate to help us transform schools I must explain to you how all this mistaken idea</p>
                        </div>
                    </div>
                </div>

                <div className="row-2-big-img">
                    <div className="img-holder">
                        <img src={Img6} alt="" className='row2-big-img'/>
                        <div className="hover-content">
                        <AiFillPlusCircle style={{ color: 'white', fontSize: '35px'}}/>
                        <h4>School In Philippian</h4>
                            <p>Donate for Poor Child Education I must explain to you how all this mistaken idea of </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      
    )
}