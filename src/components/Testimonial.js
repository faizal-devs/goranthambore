import React from 'react';
import TestImg from "../assets/images/testimonial/quote.png"
import TestImg2 from "../assets/images/testimonial/author-1.jpg"
import TestImg3 from "../assets/images/testimonial/quote.png"
import TestImg4 from "../assets/images/testimonial/author-2.jpg"
import TestImg5 from "../assets/images/testimonial/quote.png"
import TestImg6 from "../assets/images/testimonial/author-3.jpg"
import TestImg7 from "../assets/images/testimonial/quote.png"
import TestImg8 from "../assets/images/testimonial/author-2.jpg"
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const Testimonials = () => {
    return (

        <section className="testimonial-section bg_cover pt-100 pb-100" style={{backgroundimage: "url(assets/images/bg/map-bg.jpg)"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7">
                    <div className="section-title text-center text-white mb-60">
                        <span className="sub-title">Testimonials</span>
                        <h2>What Our Traveler Say About Our Tour Services</h2>
                    </div>
                </div>
            </div>
            <div className="slider-active-3-item-dot">
                <div className="gw-testimonial-item-two">
                    <div className="testimonial-inner-content">
                        <div className="quote-rating-box">
                            <div className="icon">
                                <img src={TestImg} alt="quote icon" />
                            </div>
                            <div className="ratings-box">
                                <h4>Quality Services</h4>
                                <ul className="ratings">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                        <p>To take a trivial example which of
                            usev undertakes laborious physical
                            exercise excepto obtain advantage
                            from has any right to find fault with
                            man.</p>
                        <div className="author-thumb-title">
                            <div className="author-thumb">
                            <img src={TestImg2} alt="quote icon" />
                            </div>
                            <div className="author-title">
                                <h3 className="title">Douglas D. Hall</h3>
                                <p className="position">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gw-testimonial-item-two">
                    <div className="testimonial-inner-content">
                        <div className="quote-rating-box">
                            <div className="icon">
                            <img src={TestImg3} alt="quote icon" />
                            </div>
                            <div className="ratings-box">
                                <h4>Quality Services</h4>
                                <ul className="ratings">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                        <p>To take a trivial example which of
                            usev undertakes laborious physical
                            exercise excepto obtain advantage
                            from has any right to find fault with
                            man.</p>
                        <div className="author-thumb-title">
                            <div className="author-thumb">
                            <img src={TestImg4} alt="quote icon" />
                            </div>
                            <div className="author-title">
                                <h3 className="title">Douglas D. Hall</h3>
                                <p className="position">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gw-testimonial-item-two">
                    <div className="testimonial-inner-content">
                        <div className="quote-rating-box">
                            <div className="icon">
                            <img src={TestImg5} alt="quote icon" />
                            </div>
                            <div className="ratings-box">
                                <h4>Quality Services</h4>
                                <ul className="ratings">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                        <p>To take a trivial example which of
                            usev undertakes laborious physical
                            exercise excepto obtain advantage
                            from has any right to find fault with
                            man.</p>
                        <div className="author-thumb-title">
                            <div className="author-thumb">
                            <img src={TestImg6} alt="quote icon" />
                            </div>
                            <div className="author-title">
                                <h3 className="title">Douglas D. Hall</h3>
                                <p className="position">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gw-testimonial-item-two">
                    <div className="testimonial-inner-content">
                        <div className="quote-rating-box">
                            <div className="icon">
                            <img src={TestImg7} alt="quote icon" />
                            </div>
                            <div className="ratings-box">
                                <h4>Quality Services</h4>
                                <ul className="ratings">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                        <p>To take a trivial example which of
                            usev undertakes laborious physical
                            exercise excepto obtain advantage
                            from has any right to find fault with
                            man.</p>
                        <div className="author-thumb-title">
                            <div className="author-thumb">
                            <img src={TestImg8} alt="quote icon" />
                            </div>
                            <div className="author-title">
                                <h3 className="title">Douglas D. Hall</h3>
                                <p className="position">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Testimonials;