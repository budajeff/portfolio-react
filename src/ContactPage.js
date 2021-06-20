import Card from './Card';
import Cards from './Cards';
import ContactMethods from './ContactMethods';

export default function ContactPage() {

    return (
        <Cards>
            <Card
                title='Contact Info'
                subtitle={"I'd like to hear from you."}
            >
                <ContactMethods></ContactMethods>
            </Card>
        </Cards>

    );
}