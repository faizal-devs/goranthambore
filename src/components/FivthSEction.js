import React from 'react';
import blgimg from "../assets/images/blog/mygif.gif"
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const FifthSection = () => {
    const data={
        background:"#1D231F",
            }
    return (



<div className="mycontainer" style={data}>
      <div className="image">
      <div className="single-blog-post-three mb-40">
<div className="post-thumbnail">
   
    <img src={blgimg} alt="quote icon" style={{width: 812}} className='myimg'/>
</div>
<div className="mytext">
    <div className="post-meta">
        <span><i className="far fa-calendar-alt"></i><a href="#">November 15, 2022</a></span>
        <h3 className="title"><a href="blog-details.html">Web Vitals Tools Boost Your to
            Sen Performance Scores</a></h3>
        <a href="blog-details.html" className="main-btn filled-btn">Read More<i className="far fa-paper-plane"></i></a>
    </div>
</div>
</div> 
      </div>
      <div className="mytext">
        <h1>Indian Wildlife</h1>
        <h5 style={{width: '673px', color: 'white', paddingBottom: '146px'}}>
Whenever we think about to plan the india tour we can’t miss to cover the indian wildlife. India has total 987 protected areas including 106 national parks, 564 wildlife sanctuaries, 99 conversion reserve and 99 community reserve. All these wildlife destination are covering an area of about 1,73,053 square kilometer which is 5.26% of indian geographical area.

India is land for many wild animals like royal bengal tigers, indian leopard, asia elephant, spotted deer, black bear, hyna, black buck etc.

We are covering here some major willdlife destinations which are having great chance to spot the wild animals.</h5>
      </div>
    </div>

    )
}

export default FifthSection;