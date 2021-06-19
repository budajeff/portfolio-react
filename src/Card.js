import './Card.css';
import dbeaver from "./images/dbeaver.png";
import pascal from './images/turbo-pascal.jpg';

export default function Card(
    { title = 'Example Card Title',
        imageHref = './images/dbeaver.png',
        subtitle = 'Sub-title',
        details = ['detail 1', 'detail 2'],
        children }) {

    const standardContent = (
        <div className='card-flex'>
            <section className='image-section'>
                <img className='card-img' src={dbeaver}></img>
            </section>
            <section className='text-section'>
                <div className='card-text'>
                    <h4>{subtitle}</h4>
                    {details.map(detail => <p>{detail}</p>)}
                </div>
            </section>
        </div>
    );

    return (
        <section className='card'>
            <h3>{title}</h3>
            {children ? children : standardContent}
        </section>
    );
}