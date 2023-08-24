import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import blogimg from "../assets/images/blog/blog-7.jpg"
const Bread_crumbs = () => {
    return (

<section class="page-banner overlay pt-170 pb-170 bg_cover" style={{backgroundimage: `url("assets/images/bg/page-bg.jpg");`}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="page-banner-content text-center text-white">
                            <h1 class="page-title">Contact Us</h1>
                            <ul class="breadcrumb-link text-white">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Bread_crumbs;
