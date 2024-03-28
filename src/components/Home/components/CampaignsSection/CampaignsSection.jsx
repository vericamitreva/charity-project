import "./campaigns.css"
import CampaignImg1 from "../../../../assets/home/campaign-img-1.jpg"
import CampaignImg2 from "../../../../assets/home/campaign-img-2.jpg"
import CampaignImg3 from "../../../../assets/home/campaign-img-3.jpg"
import UserImg from "../../../../assets/home/user-img.jpg"

const FeaturedCampaigns = () => {
    return (
        <div className="featured-campaigns">
            <div className="featured-campaigns-container">
                <div className="campaigns-heading-container">
                    <span className="campaigns-title">We Love To Help Poor</span>
                    <h2 className="campaigns-heading">Our Featured Campaigns</h2>
                    <p className="campaigns-paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                </div>

                <div className="campaigns-area">
                    <div className="card-1">
                        <div className="campaign-img">
                            <span className="thumb">Medicine</span>
                            <img src={CampaignImg1} alt="" className="card-img"/>
                        </div>
                        <div className="campaign-content">

                        <div className="campaign-content-inner">
                            <h2 className="card-heading">Help To Build a Secure Life Of a Poor Children.</h2>
                            <span className="progress-percent">100%</span>
                            <div className="campaign-progress">
                            <div className="percentage">
                                    
                                    </div>
                            </div>
                            <ul className="campaign-money">
                                <li>Raised:$17,198.00</li>
                                <li>Goal: $3,000.00</li>
                            </ul>

                            <div className="campaign-btn">
                                <ul className="user-donate">
                                    <li>
                                        <span className="user-img">
                                        <img src={UserImg} className="user-image" alt="" />
                                        </span>
                                        <span className="user-name">Laura Fairey</span>
                                    </li>
                                    <li>
                                        <a href="" className="donate-btn">Donate now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        </div>
                    </div>

                    <div className="card-2">
                    <div className="campaign-img">
                    <span className="thumb">Food</span>
                    <img src={CampaignImg2} alt="" className="card-img"/>
                    </div>
                    <div className="campaign-content">

                    <div className="campaign-content-inner">
                            <h2 className="card-heading">Ensure Clean Water To The African Kids.	</h2>
                            <span className="progress-percent">100%</span>
                            <div className="campaign-progress">
                            <div className="percentage">
                                    
                                    </div>
                            </div>
                            <ul className="campaign-money">
                                <li>Raised:$54,445.00</li>
                                <li>Goal:$2,500.00</li>
                            </ul>

                            <div className="campaign-btn">
                                <ul className="user-donate">
                                    <li>
                                        <span className="user-img">
                                            <img src={UserImg} className="user-image" alt="" />
                                        </span>
                                        <span className="user-name">Laura Fairey</span>
                                    </li>
                                    <li>
                                        <a href="" className="donate-btn">Donate now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    </div>

                    <div className="card-3">
                    <div className="campaign-img">
                    <span className="thumb">Education</span>
                    <img src={CampaignImg3} alt="" className="card-img" />
                    </div>
                    <div className="campaign-content">
                        <div className="campaign-content-inner">
                            <h2 className="card-heading">Your Help Can Save A Human Life From Death.</h2>
                                <span className="progress-percent">77.86%</span>
                            <div className="campaign-progress">
                                <div className="card-3-percentage">
                                </div>

                            </div>
                            <ul className="campaign-money">
                                <li>Raised:$2,725.00</li>
                                <li>Goal:$3,500.00</li>
                            </ul>

                            <div className="campaign-btn">
                                <ul className="user-donate">
                                    <li>
                                        <span className="user-img">
                                        <img src={UserImg} className="user-image" alt="" />
                                        </span>
                                        <span className="user-name">Laura Fairey</span>
                                    </li>
                                    <li>
                                        <a href="" className="donate-btn">Donate now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturedCampaigns;
