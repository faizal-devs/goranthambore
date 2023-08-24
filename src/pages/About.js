import React from 'react';
import HeaderTop from '../Inc/headerTop'
// import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
// import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
// import FooterOne from '../common/footer/FooterOne';
import AboutVideoBlock from '../components/About/AboutVideoBlock';
import FunFact from '../components/fun-fact/FunFact';
import AboutExperience from '../components/About/AboutExperience';
import AboutBlock from '../components/About/AboutBlock';
import CtaTwo from '../components/cta/CtaTwo';
// import AboutTeam from '../components/About/AboutTeam';
import Subscribe from '../components/subscribe/Subscribe';
import TestimonialStyleTwo from '../components/testimonial/TestimonialStyleTwo';
import Footer from '../Inc/footer';
// import HowItWorkOne from '../components/how-it-work/HowItWorkOne';

const About = () => {
    return (
        <>
            <HeaderTop />
            {/* <HeaderBottomTwo /> */}
            <Breadcrumb 
                // breadcrumbBg={breadcrumbBg}
                heading="Our Company"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="About Us"
            />
            <AboutVideoBlock />
            <FunFact />
            <AboutExperience />
            <AboutBlock />
            <CtaTwo />
            {/* <AboutTeam /> */}
            {/* <HowItWorkOne /> */}
            <TestimonialStyleTwo />
            <Subscribe />
            {/* <FooterOne /> */}
            <Footer></Footer>
            
        </>
    )
}

export default About;

