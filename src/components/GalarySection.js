import React from 'react';
import GalImg from "../assets/images/gallery/gallery-7.jpg"
import GalImg2 from "../assets/images/gallery/gallery-8.jpg"
import GalImg3 from "../assets/images/gallery/gallery-9.jpg"
import GalImg4 from "../assets/images/gallery/gallery-9.jpg"
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const Gallery = () => {
    return (

        <section className="gallery-section-two pb-100">
        <div className="container-fluid">
            <div className="slider-active-3-item-dot">
                <div className="single-gallery-item-two">
                    <div className="img-holder">
                        <img src={GalImg} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Tent Camping Inside Forest</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div>
                <div className="single-gallery-item-two">
                    <div className="img-holder">
                    <img src={GalImg2} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Couple Tent Camping On Hills</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div>
                <div className="single-gallery-item-two">
                    <div className="img-holder">
                    <img src={GalImg3} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Camping For Every Children</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div>
                <div className="single-gallery-item-two">
                    <div className="img-holder">
                    <img src={GalImg4} alt="Gallery Image" />
                    </div>
                    <div className="content">
                        <h3 className="title">Couple Tent Camping On Hills</h3>
                        <a href="#">Adventure & Travel</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Gallery;