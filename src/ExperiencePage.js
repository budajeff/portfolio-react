import SiteData from './SiteData';
import Card
    from './Card';
export default function ExperiencePage() {
    return (
        <section>
            <h2>Over 20 Years of Software Development Experience</h2>
            {SiteData().experience.map(job =>
                <Card
                    title={job.title}
                    subtitle={job.team}
                    details={job.details}
                >
                </Card>
            )}
        </section>
    );
}