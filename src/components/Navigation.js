import React from 'react';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
    return (
        
        <header id="header-main" className={props.theProps && props.theProps.location.pathname === '/' ? '' : 'sub-header'}>
              <div className="navigation-wrap">
                <div className="container">
                    <div className="logo-box">
                        <a href="/" className="logo-link"></a>
                    </div>

                    <a href="/" className="logotext">Chique</a>

                    <div className="navbar">
                        <nav className="normal-nav">
                            <ul className="normal-nav__main">
                                <li className="nav--item cur--item">
                                    <Link className="nav-item--link" to="/">
                                    Home
                                    </Link>
                                </li>
                                <li className="nav--item">
                                    <Link className="nav-item--link" to="/diningroom">
                                    Dining Room
                                    </Link>
                                </li>
                                <li className="nav--item">
                                    <Link className="nav-item--link" to="/dinermenu">
                                    Menu
                                    </Link>
                                </li>
                                <li className="nav--item">
                                    <Link className="nav-item--link" to="/diningroom">
                                    Reservation
                                    </Link>
                                </li>
                                <li className="nav--item">
                                    <Link className="nav-item--link" to="/contact">
                                    Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <MobileNav />

                    </div>
                </div>
            </div>
            </header>
    )
}
