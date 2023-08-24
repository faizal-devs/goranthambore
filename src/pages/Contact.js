import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import contactimg from "../assets/images/icon/icon-1.png"
import contactimg2 from "../assets/images/icon/icon-2.png"
import contactimg3 from "../assets/images/icon/icon-3.png"
import HeaderTop from '../Inc/headerTop';
import Footer from '../Inc/footer';
const Contact = () => {
    return (

<>
<HeaderTop></HeaderTop>
<section class="page-banner overlay pt-170 pb-170 bg_cover" style={{backgroundimage: `url("assets/images/bg/page-bg.jpg");`}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="page-banner-content text-center text-white">
                            <h1 class="page-title">Contact Us</h1>
                            <ul class="breadcrumb-link text-white">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact-info-section pt-100 pb-60">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        {/* <!--=== Section Title ===--> */}
                        <div class="section-title text-center mb-45 wow fadeInDown">
                            <span class="sub-title">Contact Us</span>
                            <h2>Ready to Get Our Best Services!
                            Feel Free to Contact With Us</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        {/* <!--=== Contact Info Item ===--> */}
                        <div class="contact-info-item text-center mb-40 wow fadeInUp">
                            <div class="icon">
                                <img src={contactimg} alt="icon"/>
                            </div>
                            <div class="info">
                                <span class="title">Office Location</span>
                                <p>55 Main Street, 2nd Floor
                                    New York City</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        {/* <!--=== Contact Info Item ===--> */}
                        <div class="contact-info-item text-center mb-40 wow fadeInDown">
                            <div class="icon">
                                <img src={contactimg2} alt="icon"/>
                            </div>
                            <div class="info">
                                <span class="title">Email Address</span>
                                <p><a href="https://demo.webtend.net/cdn-cgi/l/email-protection#85f6f0f5f5eaf7f1ecebe3eac5e2e8e4ece9abe6eae8"><span class="__cf_email__" data-cfemail="22515752524d50564b4c444d62454f434b4e0c414d4f">[email&#160;protected]</span></a></p>
                                <p><a href="https://demo.webtend.net/cdn-cgi/l/email-protection#c3b7b1a2b5a6afa2a7b5a6adb7b6b1a6edada6b7">traveladventure.net</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        {/* <!--=== Contact Info Item ===--> */}
                        <div class="contact-info-item text-center mb-40 wow fadeInUp">
                            <div class="icon">
                                <img src={contactimg3} alt="icon"/>
                            </div>
                            <div class="info">
                                <span class="title">Hotline</span>
                                <p><a href="tel:+000(123)45688">+000 (123) 456 88</a></p>
                                <p><a href="tel:+8596320">+859 63 20</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </section>
        {/* <!--====== End Info Section ======-->
        <!--====== Start Contact Map Section ======--> */} 
        <section class="contact-page-map pb-100 wow fadeInUp">
            {/* <!--=== Map Box ===--> */}
            <div class="map-box">
                <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            </div>
        </section>
        {/* <!--====== End Contact Map Section ======--> */} 
        {/* <!--====== Start Contact Section ======--> */}
        <section class="contact-section pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="section-title text-center mb-50 wow fadeInDown">
                            <span class="sub-title">Get In Touch</span>
                            <h2>Send Us Message</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="contact-area wow fadeInUp">
                            <form class="contact-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="text" placeholder="Name" class="form_control" name="name" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="text" placeholder="Phone Number" class="form_control" name="number" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="email" placeholder="Email Address" class="form_control" name="email" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="url" placeholder="Website" class="form_control" name="website" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form_group">
                                            <textarea name="message" placeholder="Write Message" class="form_control" rows="6"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form_group text-center">
                                            <button class="main-btn primary-btn">Send Us Message<i class="fas fa-paper-plane"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<Footer></Footer>
</>
    )
}

export default Contact;