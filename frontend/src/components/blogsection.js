import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import blogimg from "../assets/images/blog/food1.jpg"
import blogimg2 from "../assets/images/blog/food2.jpg"
import blogimg3 from "../assets/images/blog/food3.jpg"
const Blogsection = () => {
    return (
        <section className="blog-section pt-100 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center mb-45">
                            <span className="sub-title">News & Blog</span>
                            <h2>Amazing News & Blog For
                                Every Single Update</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-blog-post-three mb-40">
                            <div className="post-thumbnail">
                                <img src={blogimg} alt="Blog Image" />
                            </div>
                            <div className="entry-content">
                                <div className="post-meta">
                                    <span><i className="far fa-calendar-alt"></i><a href="#">November 15, 2022</a></span>
                                    <h3 className="title"><a href="blog-details.html">Meet Skeleton Svelte Taile
                                            Sind For Reactive UIs</a></h3>
                                    <a href="blog-details.html" className="main-btn filled-btn">Read More<i className="far fa-paper-plane"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-blog-post-three mb-40">
                            <div className="post-thumbnail">
                            <img src={blogimg2} alt="Blog Image" />
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
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-blog-post-three mb-40">
                            <div className="post-thumbnail">
                            <img src={blogimg3} alt="Blog Image" />
                            </div>
                            <div className="entry-content">
                                <div className="post-meta">
                                    <span><i className="far fa-calendar-alt"></i><a href="#">November 15, 2022</a></span>
                                    <h3 className="title"><a href="blog-details.html">Smashing Podcast Episode See
                                        With Paul Billion-Dollar Idea</a></h3>
                                    <a href="blog-details.html" className="main-btn filled-btn">Read More<i className="far fa-paper-plane"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogsection;