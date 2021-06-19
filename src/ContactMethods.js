import './ContactMethods.css';
import SiteData from './SiteData';
import ContactForm from './ContactForm';


export default function ContactMethods() {

    const siteData = SiteData();
    const emailHref = 'mailto:' + siteData.contactInfo.email;

    return (
        <ul className='contact-methods-list'>
            <li>
                Email me at <a target="_blank" rel="noreferrer" href={emailHref}>{siteData.contactInfo.email}</a>
            </li>
            <li>
                LinkedIn Messaging also <a target="_blank" rel="noreferrer" href={siteData.contactInfo.linkedInUri}>works.</a>
            </li>
            <li className="contact-form-block">
                <p>I prefer email or LinkedIn but you're welcome to contact me via this form which I'm using as a coding sample for potential employers.</p>
                <ContactForm></ContactForm>
            </li>
        </ul>

    );
}