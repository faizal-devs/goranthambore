import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import backgroundImage2 from "../assets/images/bg/page-bg.jpg";
import aboutimg from "../assets/images/gallery/we-3.jpg";
import aboutimg2 from "../assets/images/gallery/we-4.jpg";
import aboutimg3 from "../assets/images/gallery/we-5.jpg";
import aboutimg4 from "../assets/images/bg/page-bg.jpg";
import aboutimg5 from "../assets/images/bg/page-bg.jpg";
import Footer from '../Inc/footer';
import HeaderTop from '../Inc/headerTop';
const Aboutus = () => {
    return (
<>
<HeaderTop></HeaderTop>
        <section className="page-banner overlay pt-170 pb-170 bg_cover" 
        style={{backgroundImage: backgroundImage2}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div classNameName="page-banner-content text-center text-white">
                        <h1 classNameName="page-title">About Us</h1>
                        <ul classNameName="breadcrumb-link text-white">
                            <li><a href="index.html">Home</a></li>
                            <li classNameName="active">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="features-section pt-100 pb-50">
        <div className="container">
            <div className="row align-items-xl-center">
                <div className="col-xl-5">
                    {/* <!--=== Features Content Box ===--> */}
                    <div className="features-content-box pr-lg-70 mb-50 wow fadeInLeft">
                        {/* <!--=== Section Title ===--> */}
                        <div className="section-title mb-30">
                            <span className="sub-title">Availability</span>
                            <h2>Explore GoWilds
                                Real Adventure
                                & Travels</h2>
                        </div>
                        <p className="mb-30">Sit amet consectetur integer tincidunt sceleries noda
                            lesry volutpat neque fermentum malesuada scelequecy
                            leocras odio blandit rhoncus eues feugiat</p>
                        <a href="#" className="main-btn filled-btn">Learn More<i className="far fa-paper-plane"></i></a>
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="features-item-area mb-20 pl-lg-70">
                        <div className="row">
                            <div className="col-md-6">
                                {/* <!--=== Fancy Icon Box ===--> */}
                                <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                                    <div className="icon">
                                        <i className="flaticon-camping"></i>
                                    </div>
                                    <div className="text">
                                        <h3 className="title">Tent Camping</h3>
                                        <p>Sit amet consectetur integ
                                            tincidunt scelerie nodermen
                                            malesuada sceleris massa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <!--=== Fancy Icon Box ===--> */}
                                <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                                    <div className="icon">
                                        <i className="flaticon-biking-mountain"></i>
                                    </div>
                                    <div className="text">
                                        <h3 className="title">Mountain Biking</h3>
                                        <p>Sit amet consectetur integ
                                            tincidunt scelerie nodermen
                                            malesuada sceleris massa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <!--=== Fancy Icon Box ===--> */}
                                <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                                    <div className="icon">
                                        <i className="flaticon-fishing-2"></i>
                                    </div>
                                    <div className="text">
                                        <h3 className="title">Fishing & Boat</h3>
                                        <p>Sit amet consectetur integ
                                            tincidunt scelerie nodermen
                                            malesuada sceleris massa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <!--=== Fancy Icon Box ===--> */}
                                <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                                    <div className="icon">
                                        <i className="flaticon-caravan"></i>
                                    </div>
                                    <div className="text">
                                        <h3 className="title">RV Caravan Tent</h3>
                                        <p>Sit amet consectetur integ
                                            tincidunt scelerie nodermen
                                            malesuada sceleris massa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="who-we-section">
        <div className="container">
            <div className="row align-items-xl-center">
                <div className="col-lg-6 order-2 order-lg-1">
                    {/* <!--=== We Image Box ===--> */}
                    <div className="we-image-box text-center text-lg-left wow fadeInDown">
                        <img src={aboutimg} className="radius-top-left-right-288" alt="Image"/>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    {/* <!--=== We Content Box ===--> */}
                    <div className="we-one_content-box">
                        <div className="section-title mb-30 wow fadeInUp">
                            <span className="sub-title">Who We Are</span>
                            <h2>Great Opportunity For
                                Adventure & Travels</h2>
                        </div>
                        <p className="wow fadeInDown">Set perspiciatis unde omnis iste natus error voluptatem accusantium 
                            doloremue laudantium totam rem aperiam eaque quae abillo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="skill-wrapper wow fadeInUp">
                            <div className="single-skill-circle text-center">
                                <div className="inner-circle">
                                    <div className="line"></div>
                                    <span className="number">60%</span>
                                </div>
                                <h5>Saticfied Clients</h5>
                            </div>
                            <div className="single-skill-circle text-center">
                                <div className="inner-circle">
                                    <div className="line"></div>
                                    <span className="number">93%</span>
                                </div>
                                <h5>Success Rate</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End We Section ======-->  */}
    {/* <!--====== Start What We Section ======--> */}
    <section className="we-section pt-100 pb-50">
        <div className="container">
            <div className="row align-items-xl-center">
                <div className="col-xl-6">
                    <div className="we-content-box mb-10 wow fadeInLeft">
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
                <div className="col-xl-6">
                    <div className="we-two_image-box mb-20">
                        <div className="row align-items-end">
                            <div className="col-md-6">
                                <div className="we-image mb-30 wow fadeInLeft">
                                    <img src={aboutimg2} alt="we Image"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="we-image mb-30 wow fadeInRight">
                                    <img src={aboutimg3} alt="we Image"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                                    <img src={aboutimg5} alt="we Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End What We Section ======--> */}
    {/* <!--====== Start CTA Section ======--> */}
    <section className="cta-bg overlay bg_cover pt-150 pb-150" style={{backgroundImage: `url("assets/images/bg/cta-bg.jpg");`}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    {/* <!--=== CTA Content Box ===--> */}
                    <div className="cta-content-box text-center text-white wow fadeInDown">
                        <h2 className="mb-35">Ready to Travel With Real
                            Adventure and Enjoy Natural</h2>
                        <a href="about.html" className="main-btn primary-btn">Check Availability<i className="far fa-paper-plane"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End CTA Section ======--> */}
  <Footer></Footer>
                    
                 
 
        </>
    )
}

export default Aboutus;