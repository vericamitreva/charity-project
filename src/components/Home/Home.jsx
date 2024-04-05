import "./home.css"
import HeroSection from "./components/HeroSection/HeroSection"
import WidgetSection from "./components/WidgetSection/WidgetSection"
import AboutSection from "./components/AboutSection/AboutSection"
import FeaturedCampaigns from "./components/CampaignsSection/CampaignsSection"
import TeamSection from "./components/TeamSection/TeamSection"
import TestimonialSection from "./components/TestimonialSection/TestimonialSection"
import Volunteer from "./components/VolunteerSection/VolunteerSection"
import EventsSection from "./components/EventsSection/EventsSection"
import OurBlogSection from "./components/OurBlogSection/OurBlogSection"
import PartnersDonorsSection from "./components/PartnersDonorsSection/PartnersDonorsSection"

export default function Home() {
    return (
        <div className="home-container">
            <HeroSection/>
            <WidgetSection/>
            <AboutSection />
            <FeaturedCampaigns />
            <TeamSection />
            <TestimonialSection />
            <Volunteer />
            <EventsSection />
            <OurBlogSection />
            <PartnersDonorsSection />
        </div>
    )
}