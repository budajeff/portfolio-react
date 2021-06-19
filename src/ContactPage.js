import Card from './Card';
import ContactMethods from './ContactMethods';

export default function ContactPage() {

    return (
        <Card
            title='Contact Info'
            subtitle={"I'd like to hear from you."}
        >
            <ContactMethods></ContactMethods>
        </Card>
    );
}