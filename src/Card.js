import './Card.css';
import dbeaver from "./images/dbeaver.png";


export default function Card(
    { title = 'Example Card Title',
        imageHref = './images/dbeaver.png',
        subtitle = 'Sub-title',
        details = ['detail 1', 'detail 2'] }) {
    return (
        <section className='card'>
            <h3>{title}</h3>
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

        </section>
    );
}