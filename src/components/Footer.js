import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer id="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-inner__col">
                            <div className="inside-col">
                                <h5 className="inside-col__title">contact us</h5>
                                <div className="address-info">
                                    <p className="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam iure fugiat saepe iste provident!</p>
                                    <p>tel: 123 212 212</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, repellendus?</p>
                                    <a href="" target="_blank">email: info@mailchique.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-inner__col small-col">
                                <div className="inside-col">
                                    <h5 className="inside-col__title">links</h5>
                                    <ul className="menu-links">
                                        <li>
                                        <Link to="/diningroom">
                                            Dining Room
                                        </Link>
                                        </li>

                                        <li>
                                        <Link to="/menu">
                                            What's on the Menu
                                        </Link>
                                        </li>

                                        <li>
                                        <Link to="/contact">
                                            Contact us
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                        </div>

                        {/* <div className="footer-inner__col quart-col">
                                <div className="inside-col">
                                    <h5 className="inside-col__title">awards</h5>
                                    <div className="awar-imgs">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                        </div> */}

                        <div className="footer-inner__col quart-col">
                                <div className="inside-col">
                                    <h5 className="inside-col__title">follow us</h5>
                                    <FontAwesomeIcon icon={faFacebookF} className="fa-2x social-spacing only-first" />
                                    <FontAwesomeIcon icon={faTwitter} className="fa-2x social-spacing" />
                                    <FontAwesomeIcon icon={faInstagram} className="fa-2x social-spacing" />
                                    
                                </div>
                        </div>

                    </div>
                </div>
                <div className="footbtm">
                    <p>Made with &hearts; by Digital Nomad Rudolf &copy; 2019.</p>
                </div>
            </footer>
    )
}
