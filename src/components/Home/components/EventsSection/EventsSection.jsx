import "./eventsSection.css"
import Event1 from "./../../../../assets/home/event1.jpg"
import Event2 from "./../../../../assets/home/event2.jpg"
import Event3 from "./../../../../assets/home/event3.jpg"

export default function EventsSection() {
    return (
        <section>
            <div className="events-section-container">
                <div className="text-container">
                    <span> Events </span>
                    <h2> Fundraising Events </h2>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. </p>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <img src={Event1} alt="event-img"/>
                        <div className="green-element">
                            <p>30</p>
                            <p className="month">Nov</p>
                        </div>
                        <div className="card-text">
                            <h2>
                                <a href="/">Providing Education Is The Valuable Gift</a>
                            </h2>
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Event2} alt="event-img"/>
                        <div className="green-element">
                            <p>25</p>
                            <p className="month">Oct</p>
                        </div>
                        <div className="card-text">
                            <h2>
                                <a href="/">Evaluating The Best Ways to Give to the Poor</a>
                            </h2>
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Event3} alt="event-img"/> 
                        <div className="green-element">
                            <p>25</p>
                            <p className="month">Oct</p>
                        </div>
                        <div className="card-text">
                            <h2>
                                <a href="/">Let’s Save The Rare Birds From Hunting</a>
                            </h2>
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}