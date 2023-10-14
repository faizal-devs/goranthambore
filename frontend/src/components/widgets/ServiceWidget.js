import React from 'react';
import {Link} from 'react-router-dom';
// import { FaArrowRight } from "react-icons/fa";

const ServiceWidget = () => {
    return (
        <>
            <div className="widget service-list-widget mb-60">
                <h3 className="widget-title">Our Services</h3>
                <ul>
                    <li><Link to="/Trinetra-Ganesh-Ji-Temple">Trinetra Ganesh Ji Temple</Link></li>
                    <li><Link to="/ranthambore-fort">Ranthamore Fort </Link></li>
                    <li><Link to="/bird-watching-near-ranthambore">Bird Watching Near Ranthambore </Link></li>
                    <li><Link to="/chambal-safari-ranthambore">Chambal Safari Ranthambore </Link></li>
                    <li><Link to="/">More Events </Link></li>
                    
                </ul>
            </div>
        </>
    )
}

export default ServiceWidget;