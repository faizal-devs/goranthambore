import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import HomeOneImg from '../assets/images/hero/hero-one_img-1.jpg';
import HomeTwoImg from '../assets/images/hero/hero-three_img-2.jpg';
const SliderSction = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
          <img  src={HomeOneImg} alt="Home slider"  />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <img  src={HomeOneImg} alt="Home slider"  />
          </div>
          <div className="carousel-item">
         <img  src={HomeOneImg} alt="Home slider"  />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    )
}

export default SliderSction;