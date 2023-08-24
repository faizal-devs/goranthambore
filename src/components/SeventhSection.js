import React from 'react';
import popServiceimg from "../assets/images/service/service-4.jpg"
import popServiceimg2 from "../assets/images/service/service-5.jpg"
import popServiceimg3 from "../assets/images/service/service-4.jpg"

// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const SeventSection = () => {
    return (

<section className="service-section pt-100 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="section-title text-center mb-50">
                            <span className="sub-title">Popular Services</span>
                            <h2>Amazing Adventure Camping
                                Services for Enjoyed</h2>
                        </div>
                    </div>
                </div>
                <div className="slider-active-3-item">
                    <div className="single-service-item-three mb-40">
                        <div className="content">
                            <h3 className="title"><a href="#">classNameic Tents</a></h3>
                            <p>Sit amet consecteturauris natoque name
                                pellentue augue mattis faucibus</p>
                            <img src={popServiceimg} alt="service image"/>
                            <a href="#" className="btn-link">Read More<i className="far fa-long-arrow-right"></i></a>
                            <div className="meta">
                                <span className="icon"><i className="flaticon-blanket"></i></span>
                                <span className="icon"><i className="flaticon-cat"></i></span>
                                <span className="icon"><i className="flaticon-tent"></i></span>
                                <span className="icon"><i className="flaticon-fire"></i></span>
                                <span className="rate"><i className="fas fa-star"></i>4.9</span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="single-service-item-three mb-40">
                        <div className="content">
                            <h3 className="title"><a href="#">Caravan Solar Tent</a></h3>
                            <p>We denounce with righteous indignation
                                and beguiled and demoralized</p>
                                <img src={popServiceimg2} alt="service image"/>
                            <a href="#" className="btn-link">Read More<i className="far fa-long-arrow-right"></i></a>
                            <div className="meta">
                                <span className="icon"><i className="flaticon-blanket"></i></span>
                                <span className="icon"><i className="flaticon-cat"></i></span>
                                <span className="icon"><i className="flaticon-tent"></i></span>
                                <span className="icon"><i className="flaticon-fire"></i></span>
                                <span className="rate"><i className="fas fa-star"></i>4.9</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-service-item-three mb-40">
                        <div className="content">
                            <h3 className="title"><a href="tour-details.html">Small Cabin Wood</a></h3>
                            <p>To take trivial example which undertakes
                                laborious physical exercise chooses</p>
                                <img src={popServiceimg3} alt="service image"/>
                            <a href="#" className="btn-link">Read More<i className="far fa-long-arrow-right"></i></a>
                            <div className="meta">
                                <span className="icon"><i className="flaticon-blanket"></i></span>
                                <span className="icon"><i className="flaticon-cat"></i></span>
                                <span className="icon"><i className="flaticon-tent"></i></span>
                                <span className="icon"><i className="flaticon-fire"></i></span>
                                <span className="rate"><i className="fas fa-star"></i>4.9</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SeventSection;