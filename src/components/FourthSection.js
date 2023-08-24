import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const Fourthsection = () => {
    return (
<section className="fun-section">
            <div className="container">
                <div className="fun-wrapper pt-60 pb-20 bg_cover"
                 style={{backgroundImage: `url("assets/images/bg/map.png")`}}
                 >
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-counter-item-two mb-30">
                                <div className="inner-counter text-center">
                                    <div className="icon">
                                        <i className="flaticon-journey"></i>
                                    </div>
                                    <div className="content text-white">
                                        <h2 className="number"><span className="count">356</span>+</h2>
                                        <p>Happy Traveler</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-counter-item-two mb-30">
                                <div className="inner-counter text-center">
                                    <div className="icon">
                                        <i className="flaticon-tent-1"></i>
                                    </div>
                                    <div className="content text-white">
                                        <h2 className="number"><span className="count">99</span>%</h2>
                                        <p>Positive Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-counter-item-two mb-30">
                                <div className="inner-counter text-center">
                                    <div className="icon">
                                        <i className="flaticon-reviews"></i>
                                    </div>
                                    <div className="content text-white">
                                        <h2 className="number"><span className="count">99</span>%</h2>
                                        <p>Positive Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">

                            <div className="single-counter-item-two mb-30">
                                <div className="inner-counter text-center">
                                    <div className="icon">
                                        <i className="flaticon-award"></i>
                                    </div>
                                    <div className="content text-white">
                                        <h2 className="number"><span className="count">24</span>K+</h2>
                                        <p>Awards Winning</p>
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

export default Fourthsection;