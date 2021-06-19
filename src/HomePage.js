import './HomePage.css';
import {LightThemeStyle} from './SharedStyles'; 

export default function HomePage() {


    return (
        <div className="home-page-container" style={LightThemeStyle}>
            <h2>Jeff Buda</h2>
            <h3>Experienced Full Stack Web Developer</h3>
            <h4>Front End * Back End * Data Store</h4>
        </div>);
}