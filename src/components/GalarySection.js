import React from 'react';
import GalImg from "../assets/images/blog/hotel1.jpg"
import GalImg2 from "../assets/images/blog/hotel2.jpg"
import GalImg3 from "../assets/images/blog/hotel3.jpg"
import GalImg4 from "../assets/images/blog/hotel4.jpg"
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const Gallery = () => {
    return (

     <Swiper 
spaceBetween={50}
slidesPerView={3}
onSlideChange={()=>console.log("slide change")}
onSwiper={(Swiper)=>console.log(Swiper)}
navigation={true} modules={[Navigation]} className="mySwiper">
<SwiperSlide>
<div className="single-gallery-item-two">
                    <div className="img-holder">
                    <img src={GalImg4} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Couple Tent Camping On Hills</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div>
</SwiperSlide>
<SwiperSlide>
<div className="single-gallery-item-two">
                    <div className="img-holder">
                    <img src={GalImg3} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Camping For Every Children</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div>
</SwiperSlide>
<SwiperSlide>      <div className="single-gallery-item-two">
                    <div className="img-holder">
                    <img src={GalImg2} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Couple Tent Camping On Hills</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div></SwiperSlide>
<SwiperSlide>
<div className="single-gallery-item-two">
                    <div className="img-holder">
                        <img src={GalImg} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Tent Camping Inside Forest</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div>
</SwiperSlide>
{/* <SwiperSlide>Slide 5</SwiperSlide>
<SwiperSlide>Slide 6</SwiperSlide>
<SwiperSlide>Slide 7</SwiperSlide>
<SwiperSlide>Slide 8</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide> */}
</Swiper> 
    )
}

export default Gallery;