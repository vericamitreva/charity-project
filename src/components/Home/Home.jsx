import "./home.css"
import HeroSection from "./components/HeroSection/HeroSection"
import WidgetSection from "./components/WidgetSection/WidgetSection"
import AboutSection from "./components/AboutSection/AboutSection"
import FeaturedCampaigns from "./components/CampaignsSection/CampaignsSection"

export default function Home() {
    return (
        <div className="home-container">
            <HeroSection/>
            <WidgetSection/>
            <AboutSection />
            <FeaturedCampaigns />
        </div>
    )
}