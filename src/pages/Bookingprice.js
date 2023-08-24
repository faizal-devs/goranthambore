import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import placeimg from "../assets/images/place/place-1.jpg"
import placeimg2 from "../assets/images/place/place-2.jpg"
import placeimg3 from "../assets/images/place/place-3.jpg"
import placeimg4 from "../assets/images/place/place-4.jpg"
import placeimg5 from "../assets/images/place/place-5.jpg"
import placeimg6 from "../assets/images/place/place-6.jpg"
import placeimg7 from "../assets/images/place/place-7.jpg"
import placeimg8 from "../assets/images/place/place-8.jpg"
import placeimg9 from "../assets/images/place/place-9.jpg"
import placeimg10 from "../assets/images/place/place-10.jpg"
import placeimg11 from "../assets/images/place/place-12.jpg"
import placeimg12 from "../assets/images/place/place-13.jpg"
import placeimg13 from "../assets/images/place/place-14.jpg"
import placeimg14 from "../assets/images/place/place-15.jpg"
import HeaderTop from '../Inc/headerTop';
import Footer from '../Inc/footer';
const Bookingpage = () => {
    return (
<>
    {/* <section class="booking-form-section pb-100">
        <div class="container-fluid">
            <div class="booking-form-wrapper p-r z-2">
                <form action="https://demo.webtend.net/html/gowilds/index-2.html" class="booking-form-two">
                    <div class="form_group">
                        <span>Check In</span>
                        <label><i class="far fa-calendar-alt"></i></label>
                        <input type="text" class="form_control datepicker" placeholder="Check In"/>
                    </div>
                    <div class="form_group">
                        <span>Check Out</span>
                        <label><i class="far fa-calendar-alt"></i></label>
                        <input type="text" class="form_control datepicker" placeholder="Check Out"/>
                    </div>
                    <div class="form_group">
                        <span>Guest</span>
                        <label><i class="far fa-user-alt"></i></label>
                        <input type="text" class="form_control" placeholder="Guest" name="text"/>
                    </div>
                    <div class="form_group">
                        <span>Accommodations</span>
                        <select class="wide">
                            <option data-display="Accommodations">Accommodations</option>
                            <option value="01">Classic Tent</option>
                            <option value="01">Forest Camping</option>
                            <option value="01">Small Trailer</option>
                            <option value="01">Tree House Tent</option>
                            <option value="01">Tent Camping</option>
                            <option value="01">Couple Tent</option>
                        </select>
                    </div>
                    <div class="form_group">
                        <button class="booking-btn">Check Availability <i class="far fa-angle-double-right"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </section> */}
<HeaderTop></HeaderTop>
<section class="page-banner overlay pt-170 pb-170 bg_cover" style={{backgroundimage: `url("assets/images/bg/page-bg.jpg");`}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="page-banner-content text-center text-white">
                            <h1 class="page-title">Ranthambore Safari Price </h1>
                            <ul class="breadcrumb-link text-white">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Ranthambore Safari Price</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <section class="places-section pb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Sitting on Boat Spreading Her Arms</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>North Province, Maldives</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg2} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">White Canopy Tent Near
                                    Coastline</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>North Province, Maldives</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg3} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Sitting on Boat Spreading Her Arms</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>Tambon Khlong Sok, Thailand</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg3} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Sitting on Boat Spreading Her Arms</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>Arefu, AG, Romania</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg4} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Cottages In The Middle Of Beach</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>Vaitāpē, French Polynesia</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg5} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Beautiful Floating Villa on River</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>Gaafu Dhaalu Atoll, Maldives</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg6} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Man and Woman Walks on Dock</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>Maldives</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg7} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Trees Under White Clouds during Daytime</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>Vaitāpē, French Polynesia</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/* <!--=== Single Place Item ===--> */}
                    <div class="single-place-item mb-60 wow fadeInUp">
                        <div class="place-img">
                            <img src={placeimg8} alt="Place Image"/>
                        </div>
                        <div class="place-content">
                            <div class="info">
                                <ul class="ratings">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><a href="#">(4.9)</a></li>
                                </ul>
                                <h4 class="title"><a href="tour-details.html">Body of Water Near Mountain</a></h4>
                                <p class="location"><i class="far fa-map-marker-alt"></i>Bali, Indonesia</p>
                                <p class="price"><i class="fas fa-usd-circle"></i>Price<span class="currency">$</span>93.65</p>
                                <div class="meta">
                                    <span><i class="far fa-clock"></i>05 Days</span>
                                    <span><i class="far fa-user"></i>25</span>
                                    <span><a href="tour-details.html">Details<i class="far fa-long-arrow-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="row">
                <div class="col-lg-12">
                    <ul class="gowilds-pagination wow fadeInUp text-center">
                        <li><a href="#"><i class="far fa-arrow-left"></i></a></li>
                        <li><a href="#" class="active">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#"><i class="far fa-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    </section>
    <Footer></Footer>
</>
    )
}

export default Bookingpage;