import './Card.css';
import Images from './images/Images';

export default function Card(
    { title = 'Example Card Title',
        imageKey = 'dbeaver',
        subtitle = 'Sub-title',
        details = ['detail 1', 'detail 2'],
        children }) {

    const standardContent = (
        <div className='card-flex'>
            <section className='image-section'>
                <img className='card-img' src={Images[imageKey]?.image} alt={Images[imageKey]?.atlText}></img>
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