import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import popServiceimg from "../assets/images/blog/gipsy4.jpg"
import popServiceimg2 from "../assets/images/blog/gp.jpg"
import popServiceimg3 from "../assets/images/blog/gipsy2.jpg"

// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const SeventSection = () => {
    return (
        <Swiper 
        spaceBetween={30}
slidesPerView={3}
onSlideChange={()=>console.log("slide change")}
onSwiper={(Swiper)=>console.log(Swiper)}
        navigation={true} modules={[Navigation]} className="mySwiper">
<SwiperSlide>
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
 

  
</div>
</SwiperSlide>
<SwiperSlide>
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
</SwiperSlide>
<SwiperSlide>
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
</SwiperSlide>
{/* <SwiperSlide>Slide 4</SwiperSlide>
<SwiperSlide>Slide 5</SwiperSlide>
<SwiperSlide>Slide 6</SwiperSlide>
<SwiperSlide>Slide 7</SwiperSlide>
<SwiperSlide>Slide 8</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide> */}
</Swiper>
    )
}

export default SeventSection;