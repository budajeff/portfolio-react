import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './NavBar.css';
import SkillsPage from "./SkillsPage";
import HomePage from "./HomePage";
import ExperiencePage from "./ExperiencePage";
import ComponentTestPage from "./AboutPage";
import ContactPage from "./ContactPage";

export default function NavBar() {
    return (
        <Router>
            <div>
                <div className='nav-parent'>
                    <ul className='nav-list'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
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