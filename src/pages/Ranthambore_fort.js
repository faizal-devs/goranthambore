import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import placeimg from "../assets/images/place/single-place-1.jpg"
import placeimg3 from "../assets/images/place/single-place-3.jpg"
import placeimg4 from "../assets/images/place/single-place-4.jpg"
import postbannerimg from "../assets/images/blog/banner-1.jpg"
import thumnailimg from "../assets/images/place/thumb-1.jpg"
import thumnailimg2 from "../assets/images/place/thumb-2.jpg"
import thumnailimg3 from "../assets/images/place/thumb-3.jpg"
// import placeimg9 from "../assets/images/place/single-place-9.jpg"
// import placeimg0 from "../assets/images/place/single-place-10.jpg"
import HeaderTop from '../Inc/headerTop';
import Footer from '../Inc/footer';
const Ranthambore_fort = () => {
    return (
<>
<HeaderTop></HeaderTop>
<section class="page-banner overlay pt-170 pb-170 bg_cover" style={{backgroundimage: `url("assets/images/bg/page-bg.jpg");`}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="page-banner-content text-center text-white">
                            <h1 class="page-title">Ranthambore Fort </h1>
                            <ul class="breadcrumb-link text-white">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Ranthambore Fort</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="place-details-section">
            {/* <!--=== Place Slider ===--> */}
            <div class="place-slider-area overflow-hidden wow fadeInUp">
                <div class="place-slider">
                    <div class="place-slider-item">
                        <div class="place-img">
                            <img src={placeimg} alt="Place Image"/>
                        </div>
                    </div>
                    <div class="place-item">
                        <div class="place-img">
                            <img src={placeimg2}alt="Place Image"/>
                        </div>
                    </div>
                    <div class="place-slider-item">
                        <div class="place-img">
                            <img src={placeimg3} alt="Place Image"/>
                        </div>
                    </div>
                    <div class="place-slider-item">
                        <div class="place-img">
                            <img src={placeimg4} alt="Place Image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                {/* <!--=== Tour Details Wrapper ===--> */}
                <div class="tour-details-wrapper pt-80">
                    {/* <!--=== Tour Title Wrapper ===--> */}
                    <div class="tour-title-wrapper pb-30 wow fadeInUp">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="tour-title mb-20">
                                    <h3 class="title">Boat Traveling on Made River</h3>
                                    <p><i class="far fa-map-marker-alt"></i>Tambon Khlong Sok, Thailand</p>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="tour-widget-info">
                                    <div class="info-box mb-20">
                                        <div class="icon">
                                            <i class="fal fa-box-usd"></i>
                                        </div>
                                        <div class="info">
                                            <h4><span>From</span>$96.54</h4>
                                        </div>
                                    </div>
                                    <div class="info-box mb-20">
                                        <div class="icon">
                                            <i class="fal fa-clock"></i>
                                        </div>
                                        <div class="info">
                                            <h4><span>Durations</span>7 Days</h4>
                                        </div>
                                    </div>
                                    <div class="info-box mb-20">
                                        <div class="icon">
                                            <i class="fal fa-planet-ringed"></i>
                                        </div>
                                        <div class="info">
                                            <h4><span>Tour Type</span>City Tour</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--=== Tour Area Nav ===--> */}
                    <div class="tour-area-nav pt-20 pb-20 wow fadeInUp">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <div class="ratings-box">
                                    <ul class="ratings">
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><a href="#">(3k Riviews)</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div class="col-md-8">
                                <div class="share-nav">
                                    <a href="#">Share<i class="far fa-share"></i></a>
                                    <a href="#">Reviews<i class="far fa-share"></i></a>
                                    <a href="#">Whislist<i class="far fa-heart"></i></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-8">
                            {/* <!--=== Place Content Wrap ===--> */}
                            <div class="place-content-wrap pt-45 wow fadeInUp">
                                <h3 class="title">Explore Tours</h3>
                                <p>Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet
                                    consectetur adipisci velit sed quian numquam eius modi tempora incidunt ut labore dolore magnam aliquam
                                    quaerat voluptatem. Ut enim ad minima veniam qunostrum exercitationem ullam corporis suscipit laboriosaey
                                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                    esse quam nihil molestiae consequatur veillum qui dolorem voluptas nulla pariatur</p>
                                <h4>Advance Facilities</h4>
                                <p>Neque porro quisquam est dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius tempora incidunt labore dolore magnam aliquam quaerat voluptatem.</p>
                                <div class="row align-items-lg-center">
                                    <div class="col-lg-5">
                                        <ul class="check-list">
                                            <li><i class="fas fa-badge-check"></i>Parking in the Camp</li>
                                            <li><i class="fas fa-badge-check"></i>Pick and Drop Services</li>
                                            <li><i class="fas fa-badge-check"></i>Washing Machines</li>
                                            <li><i class="fas fa-badge-check"></i>Cruise Dinner & Music Event</li>
                                            <li><i class="fas fa-badge-check"></i>Visit 5 Best Places With Group</li>
                                            <li><i class="fas fa-badge-check"></i>Motorhome service</li>
                                            <li><i class="fas fa-badge-check"></i>1 Meal Per Day</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-7">
                                        <img src="assets/images/place/single-place-4.jpg" class="mb-20 w-100" alt="place image"/>
                                    </div>
                                </div>
                                <h4>Tour Plan</h4>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur 
                                    vel eillum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                            </div>
                            {/* <!--=== Days Area ===--> */}
                            <div class="days-area mb-55 wow fadeInUp">
                                <ul class="nav nav-tabs mb-35">
                                    <li class="nav-item">
                                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#day1">Day 1st</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#day2">Day 2nd</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#day3">Day 3rd</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#day4">Day 4th</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#day5">Day 5th</button>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="day1">
                                        <div class="content-box">
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt</p>
                                            <ul class="check-list">
                                                <li><i class="fas fa-badge-check"></i>Parking in the Camp</li>
                                                <li><i class="fas fa-badge-check"></i>kayaking Sport</li>
                                                <li><i class="fas fa-badge-check"></i>Mountain Hiking</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="day2">
                                        <div class="content-box">
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt</p>
                                            <ul class="check-list">
                                                <li><i class="fas fa-badge-check"></i>Parking in the Camp</li>
                                                <li><i class="fas fa-badge-check"></i>kayaking Sport</li>
                                                <li><i class="fas fa-badge-check"></i>Mountain Hiking</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="day3">
                                        <div class="content-box">
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt</p>
                                            <ul class="check-list">
                                                <li><i class="fas fa-badge-check"></i>Parking in the Camp</li>
                                                <li><i class="fas fa-badge-check"></i>kayaking Sport</li>
                                                <li><i class="fas fa-badge-check"></i>Mountain Hiking</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="day4">
                                        <div class="content-box">
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt</p>
                                            <ul class="check-list">
                                                <li><i class="fas fa-badge-check"></i>Parking in the Camp</li>
                                                <li><i class="fas fa-badge-check"></i>kayaking Sport</li>
                                                <li><i class="fas fa-badge-check"></i>Mountain Hiking</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="day5">
                                        <div class="content-box">
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt</p>
                                            <ul class="check-list">
                                                <li><i class="fas fa-badge-check"></i>Parking in the Camp</li>
                                                <li><i class="fas fa-badge-check"></i>kayaking Sport</li>
                                                <li><i class="fas fa-badge-check"></i>Mountain Hiking</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--=== Map Box ===--> */}
                            <div class="map-box mb-60 wow fadeInUp">
                                <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                            </div>
                            {/* <!--=== Calendar Box ===--> */}
                            <div class="calendar-wrapper wow fadeInUp">
                                <div class="calendar-container mb-45"></div>
                            </div>
                            {/* <!--=== Releted Tour Place ===--> */}
                            <div class="reviews-wrapper mb-60 wow fadeInUp">
                                <div class="reviews-inner-box">
                                    <div class="rating-value">
                                        <h4>Clients Reviews</h4>
                                        <div class="rate-score">4.9</div>
                                        <ul class="ratings">
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><a href="#">(4.9)</a></li>
                                        </ul>
                                        <span class="reviews">3k Reviews</span>
                                    </div>
                                    <div class="reviews-progress">
                                        <div class="single-progress-bar">
                                            <div class="progress-title">
                                                <h6>Quality <span class="rate">4.8</span></h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar wow slideInLeft" style={{width: "85%"}}></div>
                                            </div>
                                        </div>
                                       
                                        <div class="single-progress-bar">
                                            <div class="progress-title">
                                                <h6>Locations<span class="rate">4.7</span></h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar wow slideInLeft" style={{width: "90%"}}></div>
                                            </div>
                                        </div>
                                        <div class="single-progress-bar">
                                            <div class="progress-title">
                                                <h6>Cost<span class="rate">4.9</span></h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar wow slideInLeft" style={{width: "95%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        <div class="col-xl-4">
                            {/* <!--=== Sidebar Widget Area ===--> */}
                            <div class="sidebar-widget-area pt-60 pl-lg-30">
                                <div class="sidebar-widget booking-info-widget wow fadeInUp mb-40">
                                    <h4 class="widget-title">Tour Information</h4>
                                    <ul class="info-list">
                                        <li><span><i class="far fa-user-circle"></i>Max Guests<span>35</span></span></li>
                                        <li><span><i class="far fa-user-circle"></i>Minimum Age<span>12+</span></span></li>
                                        <li><span><i class="far fa-map-marker-alt"></i>Tour Location<span>Thailand</span></span></li>
                                        <li><span><i class="far fa-globe"></i>Language<span>English</span></span></li>
                                    </ul>
                                </div>
                                {/* <!--=== Recent Place Widget ===--> */}
                                <div class="sidebar-widget recent-place-widget mb-40 wow fadeInUp">
                                    <h4 class="widget-title">Last Minute Deals</h4>
                                    <ul class="recent-place-list">
                                        <li class="place-thumbnail-content">
                                            <img src={thumnailimg} alt="post thumb"/>
                                            <div class="place-content">
                                                <ul class="ratings">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="far fa-star"></i></li>
                                                </ul>
                                                <h5><a href="tour-details.html">Infinity Pool Nears
                                                    Beach</a></h5>
                                                <span class="price"><span class="text">From :</span><span class="currency">$</span>45.23</span>
                                            </div>
                                        </li>
                                        <li class="place-thumbnail-content">
                                            <img src={thumnailimg2} alt="post thumb"/>
                                            <div class="place-content">
                                                <ul class="ratings">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star-half-alt"></i></li>
                                                </ul>
                                                <h5><a href="tour-details.html">Infinity Pool Nears
                                                    Beach</a></h5>
                                                <span class="price"><span class="text">From :</span><span class="currency">$</span>45.23</span>
                                            </div>
                                        </li>
                                        <li class="place-thumbnail-content">
                                            <img src={thumnailimg3} alt="post thumb"/>
                                            <div class="place-content">
                                                <ul class="ratings">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                </ul>
                                                <h5><a href="tour-details.html">Infinity Pool Nears
                                                    Beach</a></h5>
                                                <span class="price"><span class="text">From :</span><span class="currency">$</span>45.23</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!--=== Banner Widget ===--> */}
                                <div class="sidebar-widget sidebar-banner-widget wow fadeInUp mb-40">
                                    <div class="banner-widget-content">
                                        <div class="banner-img">
                                            <img src={postbannerimg} alt="Post Banner"/>
                                            <div class="hover-overlay">
                                                <div class="hover-content">
                                                    <h4 class="title"><a href="#">Swimming Pool</a></h4>
                                                    <p><i class="fas fa-map-marker-alt"></i>Marrakesh, Morocco</p>
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
            </div>
        </section>
        <Footer></Footer>
</>

    )
}

export default Ranthambore_fort ;