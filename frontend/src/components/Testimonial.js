import React from 'react';
import TestImg from "../assets/images/testimonial/quote.png"
import TestImg2 from "../assets/images/testimonial/author-1.jpg"
import TestImg3 from "../assets/images/testimonial/quote.png"
import TestImg4 from "../assets/images/testimonial/author-2.jpg"
import TestImg5 from "../assets/images/testimonial/quote.png"
import TestImg6 from "../assets/images/testimonial/author-3.jpg"
import TestImg7 from "../assets/images/testimonial/quote.png"
import TestImg8 from "../assets/images/testimonial/author-2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const Testimonials = () => {
    const data={
        background:"#1D231F",
        color: "red"
            }
    return (
 <section >
<div className='container'>
<h2 className="myheading">Happy Client's</h2>
</div>
 <Swiper 
spaceBetween={30}
slidesPerView={1}
onSlideChange={()=>console.log("slide change")}
onSwiper={(Swiper)=>console.log(Swiper)}
navigation={true} modules={[Navigation]} className="mySwiper">
<SwiperSlide>
<div className="gw-testimonial-item-two" >
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
</SwiperSlide>
<SwiperSlide>
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
</SwiperSlide>
<SwiperSlide>
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
</SwiperSlide>
<SwiperSlide>
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
</SwiperSlide>
<SwiperSlide>
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
</SwiperSlide>
{/* <SwiperSlide>Slide 6</SwiperSlide>
<SwiperSlide>Slide 7</SwiperSlide>
<SwiperSlide>Slide 8</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide> */}
</Swiper> 
</section>
    )
}

export default Testimonials;