import React from 'react';
import GaleryImg from "../assets/images/gallery/we-3.jpg"
import GaleryImg2 from "../assets/images/gallery/we-4.jpg"
import GaleryImg3 from "../assets/images/gallery/we-5.jpg"

// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const SixthSection = () => {
    return (

        <section className="we-section pt-100 pb-50">
        <div className="container">
            <div className="row align-items-xl-center">
                <div className="col-xl-6 order-2 order-xl-1">
                    <div className="we-two_image-box mb-20">
                        <div className="row align-items-end">
                            <div className="col-md-6">
                                <div className="we-image mb-30">
                                    <img src={GaleryImg} alt="we Image"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="we-image mb-30">
                                <img src={GaleryImg2} alt="we Image"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="we-image mb-30 pr-lg-30 text-md-end">
                                <img src={GaleryImg3} alt="we Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 order-1 order-xl-2">
                    <div className="we-content-box pl-lg-50 mb-10">
                        <div className="section-title mb-30">
                            <span className="sub-title">Who We Are</span>
                            <h2>Great Opportunity For
                                Adventure & Travels</h2>
                        </div>

                        <div className="features-list_one">
                            <div className="single-features-list mb-40">
                                <div className="icon-inner d-flex align-items-center">
                                    <div className="icon-check">
                                        <i className="fas fa-badge-check"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="flaticon-helmet"></i>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Safety First Always</h4>
                                    <p>Set perspiciatis unde omnis estenatus voluptatem
                                        accusantium laudantium totarem aperiae</p>
                                </div>
                            </div>
                            <div className="single-features-list mb-40">
                                <div className="icon-inner d-flex align-items-center">
                                    <div className="icon-check">
                                        <i className="fas fa-badge-check"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="flaticon-best-price"></i>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Low Price & Friendly</h4>
                                    <p>Quis autem vel eum iure reprehenderit voluptate velit esse nihile molestiae consequatur.</p>
                                </div>
                            </div>
                            <div className="single-features-list mb-40">
                                <div className="icon-inner d-flex align-items-center">
                                    <div className="icon-check">
                                        <i className="fas fa-badge-check"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="flaticon-travel"></i>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Trusted Travel Guide</h4>
                                    <p>At vero accusamus dignissimos ducimus blanditiis
                                        praesentium voluptatum deleniti atque quos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default SixthSection;