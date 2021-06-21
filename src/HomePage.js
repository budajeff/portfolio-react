import './HomePage.css';
import {LightThemeStyle} from './SharedStyles'; 
import SiteData from './SiteData';
import Images from './images/Images';

export default function HomePage() {


    return (
        <div className="home-page-container" style={LightThemeStyle}>
            <img className="portrait" src={Images.portraitTransparent.image} alt={Images.portraitTransparent.atlText}></img>
            <h2 className="name">Jeff Buda</h2>
            <h3 className="subtitle">Experienced Full Stack Web Developer</h3>
            <h4>Front End &bull; Back End &bull; Database</h4>
            <h5><a target="_blank" rel="noreferrer" href={'mailto:' + SiteData().contactInfo.email}>{SiteData().contactInfo.email}</a></h5>
        </div>);
}