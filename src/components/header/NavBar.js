import { Component } from 'react';
import { NavLink, Link, HashRouter } from 'react-router-dom';

import './navBar.css';

export default class NavBar extends Component {

    render() {
        return (
           <nav>
                <HashRouter className="navbar" basename="/">
                    <NavLink className="navbarItem" activeClassName="navbarItem active" to="/" exact><div>Main Page</div></NavLink>
                    <NavLink className="navbarItem" activeClassName="navbarItem active" to="/changelog"><div>Changelog</div></NavLink>
                    <NavLink className="navbarItem" activeClassName="navbarItem active" to="/downloads" exact><div>Downloads</div></NavLink>
                    <NavLink className="navbarItem" activeClassName="navbarItem active" to="/team" exact><div>The Team</div></NavLink>
                    <a className="navbarItem" href="http://cqr-wiki.org" target="_blank"><div>Wiki</div></a>
                    <NavLink className="navbarItem" activeClassName="navbarItem active" to="/pmd" exact><div>Player Made Dungeons</div></NavLink>
                </HashRouter>
           </nav>
        );
    }

}