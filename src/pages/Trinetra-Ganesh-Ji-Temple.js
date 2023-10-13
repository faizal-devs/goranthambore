import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import placeimg from "../assets/images/place/single-place-1.jpg"
import placeimg2 from "../assets/images/place/single-place-2.jpg"
import placeimg3 from "../assets/images/place/single-place-3.jpg"
import placeimg4 from "../assets/images/place/single-place-4.jpg"
import bannerimg from "../assets/images/bg/page-bg.jpg"
// import placeimg5 from "../assets/images/place/single-place-5.jpg"
// import placeimg6 from "../assets/images/place/single-place-6.jpg"
// import postbannerimg from "../assets/images/blog/banner-1.jpg"
// import thumnailimg from "../assets/images/place/thumb-1.jpg"
// import thumnailimg2 from "../assets/images/place/thumb-2.jpg"
// import thumnailimg3 from "../assets/images/place/thumb-3.jpg"
import HeaderTop from '../Inc/headerTop';
import Footer from '../Inc/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const Trinetra_Ganesh_Ji_Temple = () => {
    return (
<>
<HeaderTop></HeaderTop>
<section class="page-banner overlay pt-170 pb-170 bg_cover" style={{ backgroundImage: `url(${bannerimg})` }}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="page-banner-content text-center text-white">
                            <h1 class="page-title">Trinetra Ganesh Ji Temple</h1>
                            <ul class="breadcrumb-link text-white">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Trinetra Ganesh Ji Temple</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<section class="place-details-section">
            {/* <!--=== Place Slider ===--> */}
            <Swiper 
spaceBetween={30}
slidesPerView={1}
onSlideChange={()=>console.log("slide change")}
onSwiper={(Swiper)=>console.log(Swiper)}
navigation={true} modules={[Navigation]} className="mySwiper">
<SwiperSlide>   
 <div class="place-slider-item">
                        <div class="place-img">
                            <img src={placeimg} alt="Place Image"/>
                        </div>
                    </div>
                    </SwiperSlide>
<SwiperSlide>
<div class="place-item">
                        <div class="place-img">
                            <img src={placeimg3}alt="Place Image"/>
                        </div>
                    </div>
</SwiperSlide>
<SwiperSlide>
      
<div class="place-slider-item">
                        <div class="place-img">
                            <img src={placeimg3} alt="Place Image"/>
                        </div>
                    </div>
</SwiperSlide>
<SwiperSlide>
<div class="place-slider-item">
                        <div class="place-img">
                            <img src={placeimg4} alt="Place Image"/>
                        </div>
                    </div>
</SwiperSlide>
</Swiper>
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
                          
                      
                    </div>
                </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
</>

    )
}

export default Trinetra_Ganesh_Ji_Temple ;