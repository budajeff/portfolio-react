import React, {useState} from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import './NavBar.css';
import SkillsPage from "./SkillsPage";
import HomePage from "./HomePage";
import ExperiencePage from "./ExperiencePage";
import ComponentTestPage from "./AboutPage";
import ContactPage from "./ContactPage";

export default function NavBar() {

    const [currentPage, setCurrentPage] = useState("#/");
    const handleLinkClick = (e) => { setCurrentPage(e.target.attributes['href'].value)};
    const getLinkStyle = (href) => href === currentPage ? 'nav-menu-item nav-menu-item-selected' : 'nav-menu-item';
    
    return (
        <Router>
            <div>
                <div className='nav-parent'>
                    <ul className='nav-list'>
                        <li>
                            <Link 
                                to="/" 
                                onClick={handleLinkClick} 
                                className={getLinkStyle('#/')}>Home</Link>
                        </li>
                        <li>
                            <Link 
                                to="/skills" 
                                onClick={handleLinkClick} 
                                className={getLinkStyle('#/skills')}>Skills</Link>
                        </li>
                        <li>
                            <Link 
                                to="/experience" 
                                onClick={handleLinkClick} 
                                className={getLinkStyle('#/experience')}>Experience</Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                onClick={handleLinkClick} 
                                className={getLinkStyle('#/contact')}>Contact</Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                onClick={handleLinkClick}
                                className={getLinkStyle('#/about')}>About</Link>
                        </li>
                    </ul>
                </div>
                <section className='nav-content'>
                    <Switch>
                        <Route path="/skills">
                            <SkillsPage />
                        </Route>
                        <Route path="/experience">
                            <ExperiencePage />
                        </Route>
                        <Route path="/contact">
                            <ContactPage />
                        </Route>
                        <Route path="/about">
                            <ComponentTestPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </section>
            </div>
        </Router>
    );
}