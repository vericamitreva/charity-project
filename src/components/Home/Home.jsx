import "./home.css"
import HeroSection from "./components/HeroSection/HeroSection"
import WidgetSection from "./components/WidgetSection/WidgetSection"

export default function Home() {
    return (
        <div className="home-container">
            <HeroSection/>
            <WidgetSection/>
        </div>
    )
}