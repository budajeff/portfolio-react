import './HomePage.css';
import {LightThemeStyle} from './SharedStyles'; 

export default function HomePage() {


    return (
        <div className="home-page-container" style={LightThemeStyle}>
            <h2 className="name">Jeff Buda</h2>
            <h3 className="subtitle">Experienced Full Stack Web Developer</h3>
            <h4>Front End &bull; Back End &bull; Database</h4>
        </div>);
}