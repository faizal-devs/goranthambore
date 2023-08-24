import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import HomeOneImg from '../assets/images/hero/hero-one_img-1.jpg';
import HomeTwoImg from '../assets/images/hero/hero-one_img-2.jpg';
const SliderSction = () => {
    return (
        <section className="hero-section">
        <div className="herowrapperthree">
            <div className="hero-arrows"></div>
            <div className="hero-slider-three">
                <div className="singleslider">
                    <div className="image-layer bg_cover" >
                 <img  src={HomeOneImg} alt="Home slider"  /></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7">
                                <div className="hero-content text-white">
                                    <span className="sub-title">Welcome to GoWilds</span>
                                    <h1 data-animation="fadeInDown" data-delay=".4s">Tour Travel 
                                        & Adventure</h1>
                                    <div className="hero-button" data-animation="fadeInRight" data-delay=".6s"> 
                                        <a href="contact.html" className="main-btn secondary-btn">Book Now<i className="fas fa-paper-plane"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="singleslider">
                    <div className="image-layer bg_cover" src={HomeTwoImg} alt="Home slider" ></div>
                 
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7">
                                <div className="hero-content text-white">
                                    <span className="sub-title">Welcome to GoWilds</span>
                                    <h1 data-animation="fadeInDown" data-delay=".4s">Tour Travel 
                                        & Camping</h1>
                                    <div className="hero-button" data-animation="fadeInRight" data-delay=".6s"> 
                                        <a href="contact.html" className="main-btn secondary-btn">Book Now<i className="fas fa-paper-plane"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="singleslider">
                    <div className="image-layer bg_cover" style={{backgroundimage: "url(assets/images/hero/hero-three_img-3.jpg):"}}></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7">
                                <div className="hero-content text-white">
                                    <span className="sub-title">Welcome to GoWilds</span>
                                    <h1 data-animation="fadeInDown" data-delay=".4s">Tour Travel 
                                        & Adventure</h1>
                                    <div className="hero-button" data-animation="fadeInRight" data-delay=".6s"> 
                                        <a href="contact.html" className="main-btn secondary-btn">Book Now<i className="fas fa-paper-plane"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>


    )
}

export default SliderSction;