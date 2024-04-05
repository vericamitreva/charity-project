import "./ourBlogSection.css"
import Blog1 from "./../../../../assets/home/blog1.jpg"
import Blog2 from "./../../../../assets/home/blog2.jpg"
import Blog3 from "./../../../../assets/home/blog3.jpg"
import Author from "./../../../../assets/home/author.jpg"

export default function OurBlogSection() {
    return (
        <section>
            <div className="blog-section-container">
                <div className="blog-text-container">
                    <span> Our Blog </span>
                    <h2> Latest News & Update </h2>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. </p>
                </div>
                <div className="blog-cards-container">
                    <div className="blog-card">
                        <img src={Blog1} alt="blog-img"/>
                        <div className="blog-card-text">
                            <h2>
                                <a href="/">Providing Education Is The Valuable Gift</a>
                            </h2>
                            <div className="author-box">
                                <div className="author">
                                    <img src={Author} alt="author"/>
                                    <h4>    Laura Fairey </h4>
                                </div>
                                <div className="date">
                                    <p> NOV 30 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={Blog2} alt="blog-img"/>
                        <div className="blog-card-text">
                            <h2>
                                <a href="/">Evaluating The Best Ways to Give to the Poor</a>
                            </h2>
                            <div className="author-box">
                                <div className="author">
                                    <img src={Author} alt="author"/>
                                    <h4>    Laura Fairey </h4>
                                </div>
                                <div className="date">
                                    <p> NOV 30 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={Blog3} alt="blog-img"/> 
                        <div className="blog-card-text">
                            <h2>
                                <a href="/">Let’s Save The Rare Birds From Hunting</a>
                            </h2>
                            <div className="author-box">
                                <div className="author">
                                    <img src={Author} alt="author"/>
                                    <h4>    Laura Fairey </h4>
                                </div>
                                <div className="date">
                                    <p> NOV 30 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}