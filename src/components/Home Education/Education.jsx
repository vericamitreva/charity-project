import EducationHero from './components/EducationHero/EducationHero'
import './education.css'
import WidgetSection from '../Home/components/WidgetSection/WidgetSection'
import CharitioAbout from '../About/components/CharitioAbout/CharitioAbout'
import FunFact from '../About/components/FunFactSection/FunFact'
import CampaignsSection from '../Home/components/CampaignsSection/CampaignsSection'


export default function Education() {
    return (
        <div className="education-container">
            <EducationHero />
            <WidgetSection />
            <CharitioAbout />
            <FunFact />
            <CampaignsSection />
        </div>
    )
}