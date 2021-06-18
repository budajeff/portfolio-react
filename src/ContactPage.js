import Card from './Card';
import SiteData from './SiteData';
import ContactForm from './ContactForm';

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
            <li>
                I prefer email or LinkedIn but you're welcome to contact me via this form which I'm using as a coding sample for potential employers.
                <ContactForm></ContactForm>
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