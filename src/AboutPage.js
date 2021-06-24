import { useContext } from "react";
import "./AboutPage.css";
import Card from "./Card";
import Cards from './Cards';
import { SiteDataContext } from "./SiteDataContextProvider";

export default function ComponentTestPage() {
    
    const siteData = useContext(SiteDataContext);
    
    return (
        !siteData ? <p>Loading...</p> :
        <section>
            <Cards>
                <Card
                    title={siteData.about[0].name}
                    subtitle={siteData.about[0].subtitle}
                    details={siteData.about[0].details}
                    imageKey={siteData.about[0].image}
                >
                </Card>
            </Cards>
        </section>);
}