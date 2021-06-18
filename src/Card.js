import './Card.css';
import dbeaver from "./images/dbeaver.png";


export default function Card(
    { title = 'Example Card Title',
        imageHref = './images/dbeaver.png',
        subtitle = 'Sub-title',
        details = ['detail 1', 'detail 2'] }) {
    return (
        <section className='card'>
            <div className='card-flex'>
                <img className='card-img' src={dbeaver}></img>
                <div className='card-text'>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    {details.map(detail => <p>{detail}</p>)}
                </div>
            </div>
        </section>
    );
}