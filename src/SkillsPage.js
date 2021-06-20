import React, { useEffect } from "react";
import Card from "./Card";
import Cards from './Cards';
import SiteData from './SiteData';

export default function SkillsPage() {

    let siteData = undefined;
    useEffect(() => {
        siteData = SiteData();
        console.log(siteData);
    },
        []);

    return (
        <section>
            <h2>Skills</h2>
            <Cards>
                {SiteData().skillAreas.map(skill =>
                    <Card
                        key={skill.name}
                        title={skill.name}
                        subtitle={skill.subtitle}
                        details={skill.details}
                    ></Card>)}
            </Cards>
        </section>
    );
}