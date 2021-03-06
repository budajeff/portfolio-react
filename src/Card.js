import './Card.css';
import Images from './images/Images';

export default function Card(
    { title = 'Example Card Title',
        imageKey = undefined,
        subtitle = 'Sub-title',
        details = ['detail 1', 'detail 2'],
        children }) {
    function createMarkup(detail) { return { __html: detail }; };
    const standardContent = (
        <div className='card-flex'>
            {(imageKey ?
                <section className='image-section'>
                    <img className='card-img' src={Images[imageKey]?.image} alt={Images[imageKey]?.atlText}></img>
                </section> : null
            )}
            <section className='text-section'>
                <div className='card-text'>
                    <h4>{subtitle}</h4>
                    {

                        details.map(detail => {
                            return detail[0] === '<' 
                            ? <div key={detail} dangerouslySetInnerHTML={createMarkup(detail)}></div> 
                            : <p key={detail}>{detail}</p>
                        })}
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