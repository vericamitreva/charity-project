import "./home.css"
import HeroSection from "./components/HeroSection/HeroSection"
import WidgetSection from "./components/WidgetSection/WidgetSection"
import AboutSection from "./components/AboutSection/AboutSection"

export default function Home() {
    return (
        <div className="home-container">
            <HeroSection/>
            <WidgetSection/>
            <AboutSection />
        </div>
    )
}