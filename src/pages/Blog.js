import React from 'react'
// import Breadcrumb from '../components/breadcrumb/Breadcrumb';
// import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import Subscribe from '../components/subscribe/Subscribe';
import HeaderTop from '../Inc/headerTop';
import Footer from '../Inc/footer';
import BlogStyleOne from '../components/blog/BlogStyleOne';

const Blog = () => {
    return (
        <>
            <HeaderTop />
            <section class="page-banner overlay pt-170 pb-170 bg_cover" style={{backgroundimage: `url("assets/images/bg/page-bg.jpg");`}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="page-banner-content text-center text-white">
                            <h1 class="page-title">Blog </h1>
                            <ul class="breadcrumb-link text-white">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Blogs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Our Blog"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Blog"
            /> */}
            <BlogStyleOne />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Blog