import React from "react";
import HeaderTop from "../Inc/headerTop";
import Footer from "../Inc/footer";
import Blogsection from "../components/blogsection";
import Testimonials from "../components/Testimonial";
import Gallery from "../components/GalarySection";
import SliderSction from "../components/Slidersection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Fourthsection from "../components/FourthSection";
import FifthSection from "../components/FivthSEction";
import SixthSection from "../components/SixthSection";
import SeventSection from "../components/SeventhSection";

const Home = () => {
    return (
        <>

{/* <div class="preloader">
            <div class="loader">
                <div class="pre-shadow"></div>
                <div class="pre-box"></div>
            </div>
        </div> */}
  <HeaderTop/>
<SliderSction />
<SecondSection></SecondSection>
<ThirdSection></ThirdSection>
<Fourthsection></Fourthsection>
<SeventSection></SeventSection>
<FifthSection></FifthSection>
<SixthSection></SixthSection>
  <Gallery/>
  <br></br>
  <br></br>
  <br></br>
<Testimonials />
 <Blogsection/>
  <Footer/>
        </>
    )
}

export default Home;