import "./causes.css"
import FeaturedCampaigns from "../Home/components/CampaignsSection/CampaignsSection";


export default function Causes() {
 
    return (
    <div className="causes-section">
        <div className="causes-container">
            <div className="causes-header">
                <div className="causes-header-text">
                    <h2>Causes</h2>
                </div>
            </div>

        </div>   
        <div className="campaigns">
        <FeaturedCampaigns/>
        </div>
       
    </div>
    );
}