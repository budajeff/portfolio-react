import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SkillsPage from "./SkillsPage";
import HomePage from "./HomePage";
import ExperiencePage from "./ExperiencePage";
import ComponentTestPage from "./ComponentTestPage";

export default function NavBar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/component-test">Components</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/skills">
                        <SkillsPage />
                    </Route>
                    <Route path="/experience">
                        <ExperiencePage />
                    </Route>
                    <Route path="/component-test">
                        <ComponentTestPage/>
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}