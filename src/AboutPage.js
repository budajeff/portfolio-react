import Card from "./Card";
import "./AboutPage.css";

export default function ComponentTestPage() {
    return (
        <section>
            <Card
                title='About This Site'
                subtitle={"(It's a coding sample)."}
                details={[
                    'This site demonstrates my knowledge of basic ReactJS and CSS concepts.',
                    'I chose not to use a component or layout library so that I could get more practice with the above technologies.',
                    'It also demonstrates that I\'m not a UX designer, but I do enjoy working with those talented people :-).'
                ]}
                imageKey='reactVsCode'

            >
            </Card>

            <h3>Most of the site is made of Card components.</h3>
            <Card></Card>

        </section>);
}