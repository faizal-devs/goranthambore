import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import blogimg from "../assets/images/blog/blog-7.jpg"
const Singleblog = () => {
    return (

<div className="single-blog-post-three mb-40">
<div className="post-thumbnail">
<img src={blogimg} alt="Blog Image" />
</div>
<div className="entry-content">
    <div className="post-meta">
        <span><i className="far fa-calendar-alt"></i><a href="#">November 15, 2022</a></span>
        <h3 className="title"><a href="blog-details.html">Web Vitals Tools Boost Your to
            Sen Performance Scores</a></h3>
        <a href="blog-details.html" className="main-btn filled-btn">Read More<i className="far fa-paper-plane"></i></a>
    </div>
</div>
</div>

    )
}

export default Singleblog;