import EducationHero from './components/EducationHero/EducationHero'
import './education.css'
import WidgetSection from '../Home/components/WidgetSection/WidgetSection'
import CharitioAbout from '../About/components/CharitioAbout/CharitioAbout'
import FunFact from '../About/components/FunFactSection/FunFact'
import CampaignsSection from '../Home/components/CampaignsSection/CampaignsSection'
import EducationGallery from './components/EducationGallery/EducationGallery'
import EventsSection from '../Home/components/EventsSection/EventsSection'
import OurBlogSection from '../Home/components/OurBlogSection/OurBlogSection'
import PartnersDonorsSection from '../Home/components/PartnersDonorsSection/PartnersDonorsSection'


export default function Education() {
    return (
        <div className="education-container">
            <EducationHero />
            <WidgetSection />
            <CharitioAbout />
            <FunFact />
            <CampaignsSection />
            <EducationGallery />
            <EventsSection />
            <OurBlogSection />
            <PartnersDonorsSection />
        </div>
    )
}