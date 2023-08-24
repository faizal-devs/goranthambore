import React from 'react';
import Nav from './nav';
import logo from "../assets/images/logo/logo-black.png"


// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const HeaderTop = () => {
    return (
        <header className="header-area header-three">

        <div className="header-top-bar pt-30 pb-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 d-none d-xl-block">
                  
                        <div className="site-brading">
                            <a href="index.html" className="brand-logo">
                            <img src={logo} alt="Logo" /></a>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-12">
            
                        <div className="information-wrapper">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="single-info-item-two">
                                        <div className="inner-info">
                                            <div className="icon">
                                                <i className="far fa-map-marker-alt"></i>
                                            </div>
                                            <div className="info">
                                                <span className="title">Office Address</span>
                                                <h5>583 Main Street, USA</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-info-item-two">
                                        <div className="inner-info">
                                            <div className="icon">
                                                <i className="far fa-envelope"></i>
                                            </div>
                                            <div className="info">
                                                <span className="title">Email Address</span>
                                                <h5><a href="https://demo.webtend.net/cdn-cgi/l/email-protection#7c0f090c0c130e083c1b111d1510521f1311"><span className="__cf_email__" data-cfemail="25565055554a5751654248444c490b464a48">[email&#160;protected]</span></a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-info-item-two">
                                        <div className="inner-info">
                                            <div className="icon">
                                                <i className="far fa-phone-plus"></i>
                                            </div>
                                            <div className="info">
                                                <span className="title">Drop a Line</span>
                                                <h5><a href="tel:+000(123)45688">+000 (123) 456 88</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="header-navigation navigation-white">
            <div className="nav-overlay"></div>
            <div className="container-fluid">
                <div className="primary-menu black-bg">
                  
                    <div className="site-brading d-block d-xl-none">
                        <a href="index.html" className="brand-logo">
                        <img src={logo} alt="Logo" /></a>
                    </div>
                 
                    <div className="nav-menu">
                
                        <div className="mobile-logo mb-30 d-block d-xl-none">
                            <a href="index.html" className="brand-logo">
                            <img src={logo} alt="Site Logo" /></a>
                        </div>
                  
                        <div className="nav-search mb-30 d-block d-xl-none ">
                            <form>
                                <div className="form_group">
                                    <input type="email" className="form_control" placeholder="Search Here" name="email" required />
                                    <button className="search-btn"><i className="fas fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                  
                        {/* <nav className="main-menu">
                            <ul>
                                <li className="menu-item has-children"><a href="index.html">Home</a>
                                </li>
                                <li className="menu-item has-children"><a href="about.html">About Us</a>
                        
                                    </li>
                                <li className="menu-item has-children" /><a href="#">Jungle Safari</a>
        
        

        
                                    <ul className="sub-menu">
                                        <li><a href="tour.html">Online Safari Booking</a></li>
                                        <li><a href="product-details.html">Ranthambore Safari Price </a></li>
                                    </ul>
                                <li className="menu-item has-children"><a href="#">Tours Destination</a>
                                    <ul className="sub-menu">
                                        <li><a href="tour.html">Trinetra Ganesh Ji Temple</a></li>
                                        <li><a href="tour-details.html">Ranthamore Fort </a></li>
                                        <li><a href="tour-details.html">Bird Watching Near Ranthambore </a></li>
                                        <li><a href="tour-details.html">Chambal Safari Ranthambore </a></li>
                                        <li><a href="events.html">More Events </a></li>
                                    </ul>
                                </li>
                                <li className="menu-item has-children"><a href="blog-list.html">Blog</a>
                                </li>
                                <li className="menu-item has-children"><a href="contact.html">Contact</a>
                        
                                </li>
                             
                                
                            </ul>
                        </nav> */}
                       <Nav></Nav>
                    
                        <div className="menu-button mt-40 d-xl-none">
                            <a href="contact.html" className="main-btn secondary-btn">Book Now<i className="fas fa-paper-plane"></i></a>
                        </div>
                    </div>
                 
                    <div className="nav-right-item">
                        <div className="lang-dropdown">
                            <select className="wide">
                                <option value="English">English</option>
                            </select>
                        </div>
                        <div className="menu-button d-xl-block d-none">
                            <a href="contact.html" className="main-btn primary-btn">Book Now<i className="fas fa-paper-plane"></i></a>
                        </div>
                        <div className="navbar-toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default HeaderTop;