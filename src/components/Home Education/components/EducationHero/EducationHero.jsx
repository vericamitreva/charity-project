import './educationhero.css'
import EducationHeroImg from './education-hero.png'
import PenImg from './pen.png'
import BookImg from './book.png'
import RulerImg from './ruler.png'

export default function EducationHero() {
    return (
        <div className="education-hero">
            <div className="education-hero-container">
                <div className="education-hero-left">
                    <h2 className="education-title">
                        Giving <span>Education</span> is The Best Gift Ever
                    </h2>

                    <p className="education-subtitle">We help local nonprofits access the funding, tools, training, and support they need to become more.</p>
                
                    <div className="education-hero-btn">
                        <a href="/" className="education-button">Get Started</a>
                    </div>
                
                </div>

                <div className="education-hero-right">
                    <div className="education-image-container">
                    <img src={EducationHeroImg} alt="Hero img" className='education-hero-img' />
                    </div>

                    <div className="education-pen">
                        <img src={PenImg} alt="" className="pen-img" />
                    </div>

                    <div className="education-book">
                        <img src={BookImg} alt="" className="book-img" />
                    </div>

                    <div className="education-ruler">
                        <img src={RulerImg} alt="" className="ruler-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}