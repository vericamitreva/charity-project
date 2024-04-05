import "./volunteer.css"
import Volunteerimg from "./../../../../assets/home/volunteer.png";
import Pattern from "./../../../../assets/home/vol-pattern.png";

export default function Volunteer() {
    return(
        <section className="volunteer-section">
            <div className="volunteer-section-container">
                <div className="volunteer-content">
                    <h2 className="volunteer-heading">
                    Lets Change The World With Humanity
                    </h2>

                    <a href="/" className="volunteer-btn">Become A Volunteer</a>
                </div>

                <div className="volunteer-img">
                    <img src={Volunteerimg} alt="volunteer" />
                </div>

                <div className="shape">
                    <img src={Pattern} alt="" />
                </div>
            </div>
        </section>
    );
}