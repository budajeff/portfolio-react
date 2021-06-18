import Card from './Card';
import SiteData from './SiteData';

export default function ContactPage() {

    const siteData = SiteData();
    const emailHref = 'mailto:' + siteData.contactInfo.email;

    const cardContent = (
        <ul>
            <li>
                Email me at <a href={emailHref}>buda@gmail.com</a>
            </li>
            <li>
                LinkedIn Messaging also <a href={siteData.contactInfo.linkedInUri}>works.</a>
            </li>
        </ul>
    );
    return (
        <Card
            title='Contact Info'
            subtitle={"I'd like to hear from you."}
        >
            {cardContent}
        </Card>
    );
}