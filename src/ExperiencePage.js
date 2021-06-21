import SiteData from './SiteData';
import Card from './Card';
import Cards from './Cards';

export default function ExperiencePage() {
    
    const dateRange = (job) => {
        const endDate = job.endDate !== 'present' ? new Date(job.endDate).getFullYear() : 'Present';
        const startDate = new Date(job.startDate).getFullYear();
        const dateDetail = `${startDate} to ${endDate}`;
        return dateDetail;
    }

    return (
        <section>
            <h2>Over 20 Years of Software Development Experience</h2>
            <Cards>
                {SiteData().experience.map(job => 
                {
                    const dateDetail = dateRange(job); 
                    return <Card
                        key={job.title + job.team}
                        title={job.title}
                        subtitle={job.team}
                        details={[dateDetail, ...job.details]}
                        imageKey={job.image}
                    >
                    </Card>
})}
            </Cards>

        </section>
    );
}