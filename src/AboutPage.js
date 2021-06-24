import "./AboutPage.css";
import Card from "./Card";
import Cards from './Cards';
import SiteData from './SiteData';

export default function ComponentTestPage() {
    
    const aboutData = SiteData().about[0];
    return (
        <section>
            <Cards>
                <Card
                    title={aboutData.name}
                    subtitle={aboutData.subtitle}
                    details={aboutData.details}
                    imageKey={aboutData.image}
                >
                </Card>
            </Cards>
        </section>);
}