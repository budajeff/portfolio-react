import React, { useState, useEffect } from "react";
import Card from "./Card";
import Cards from './Cards';
import SiteData from './SiteData';

export default function SkillsPage() {
    const [skillAreas, setSkillAreas] = useState();

    useEffect(() => {
        async function loadSkills() {
            const siteData = await SiteData();
            setSkillAreas(siteData.skillAreas);
        }
        loadSkills();
    },
        []);// run once

    const cards = skillAreas
        ?
        <Cards>
            {skillAreas.map(skill =>
                <Card
                    key={skill.name}
                    title={skill.name}
                    subtitle={skill.subtitle}
                    details={skill.details}
                ></Card>)}
        </Cards> : <p>Loading...</p>;

    return (
        <section>
            <h2>Skills</h2>
            {cards}
        </section>
    );
}