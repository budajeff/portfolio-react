import './HomePage.css';
import { LightThemeStyle } from './SharedStyles';
import SiteData from './SiteData';
import Images from './images/Images';

export default function HomePage() {


    return (
        <img
            className="portrait"
            src={Images.landing.image}
            alt={Images.landing.atlText}></img>);
}