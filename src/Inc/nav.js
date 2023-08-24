import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu">
            <nav id="mobile-menu">
                <ul>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="#">Jungle Safari</Link>
                        <ul className="submenu">
                            {/* <li><Link to="/booking-page">Online Safari Booking</Link></li> */}
                            <li><Link to="/booking-page">Ranthambore Safari Price</Link></li>
                            {/* <li><Link to="/service-details">Service Details</Link></li> */}
                        </ul>
                    </li>
                    <li><Link to="/our-service">Tours Destination</Link>
                        <ul className="submenu">
                            <li><Link to="/Trinetra-Ganesh-Ji-Temple">Trinetra Ganesh Ji Temple</Link></li>
                            <li><Link to="/ranthambore-fort">Ranthamore Fort</Link></li>
                            <li><Link to="/bird-watching-near-ranthambore">Bird Watching Near Ranthambore</Link></li>
                            <li><Link to="/chambal-safari-ranthambore">Chambal Safari Ranthambore</Link></li>
                            <li><Link to="/gallery">More Events </Link></li>
                            {/* <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/faq">FAQ</Link></li> */}
                            {/* <li><Link to="/error">404</Link></li> */}
                        </ul>
                    </li>
                    <li><Link to="/blog">Blog</Link>
                    </li>
                    <li><Link to="/contact-us">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;

