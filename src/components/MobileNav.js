import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileNav() {
    return (
                        <nav className="mobile-nav">
                            <input type="checkbox" className="mobile-nav m-toggle" id="m-toggle" />
                            <label htmlFor="m-toggle"><span className="toggle-words">Navigate</span></label>

                            <ul className="mobile-nav__main">
                                <li className="mobile-nav__main--item">
                                    <Link className="m-link" to="/">
                                    Home
                                    </Link>
                                </li>
                                <li className="mobile-nav__main--item">
                                    <Link className="m-link" to="/diningroom">
                                    Dining Room
                                    </Link>
                                </li>
                                <li className="mobile-nav__main--item">
                                    <Link className="m-link" to="/dinermenu">
                                    Menu
                                    </Link>
                                </li>
                                <li className="mobile-nav__main--item">
                                    <Link className="m-link" to="/diningroom">
                                    Reservation
                                    </Link>
                                </li>
                                <li className="mobile-nav__main--item">
                                    <Link className="m-link" to="/contact">
                                    Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
    )
}
