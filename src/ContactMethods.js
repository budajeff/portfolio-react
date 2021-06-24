import { useContext } from 'react';
import './ContactMethods.css';
import ContactForm from './ContactForm';
import { SiteDataContext } from './SiteDataContextProvider';

export default function ContactMethods() {

    const siteData = useContext(SiteDataContext);
    
    return (
        !siteData ? <p>Loading...</p> :
        <ul className='contact-methods-list'>
            <li>
                Email me at <a target="_blank" rel="noreferrer" href={'mailto:' + siteData.contactInfo.email}>{siteData.contactInfo.email}</a>
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