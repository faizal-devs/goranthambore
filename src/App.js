import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// import { FaLevelUpAlt } from "react-icons/fa";

import Home from '../src/pages/home';
import "./assets/fonts/flaticon/flaticon_gowilds.css";
import "./assets/vendor/slick/slick.css";
import "./assets/fonts/fontawesome/css/all.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/magnific-popup/dist/magnific-popup.css";
import "./assets/vendor/jquery-ui/jquery-ui.min.css";
import './assets/vendor/nice-select/css/nice-select.css';
import './assets/css/default.css';
import './assets/vendor/nice-select/css/nice-select.css';
import "./assets/css/style.css";
import './App.css';
import './assets/css/main.css'
// import './assets/css/default2.css'
import About from './pages/About';
import ServiceOne from '../src/pages/ServiceOne';
import Bookingpage from './pages/Bookingprice';
import ServiceDetails from './pages/ServiceDetails';
import Trinetra_Ganesh_Ji_Temple from './pages/Trinetra-Ganesh-Ji-Temple';
import Ranthambore_fort from './pages/Ranthambore_fort';
import Bird_watching_near_ranthambore from './pages/Bird_watching_near_ranthambore';
import Chambal_Safari_Ranthambore from './pages/Chambal_Safari_Ranthambore';
import Contact from './pages/Contact';
import Aboutus from './pages/About_us';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      {/* <ScrollToTopRoute /> */}
        <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/about" exact element={<About />} /> */}
            <Route path="/service-one" exact  element={<ServiceOne />} />
            <Route path="/about-us" exact  element={<Aboutus />} />
            <Route path="/blog" exact  element={<Blog />} />
            <Route path="/BlogDetails" exact  element={<BlogDetails />} />
            <Route path="/booking-page" exact  element={<Bookingpage />} />
            <Route path="/our-service" exact  element={<ServiceDetails />} />
            <Route path="/Trinetra-Ganesh-Ji-Temple" exact  element={<Trinetra_Ganesh_Ji_Temple/>} />
            <Route path="/ranthambore-fort" exact  element={<Ranthambore_fort/>} />
            <Route path="/bird-watching-near-ranthambore" exact  element={<Bird_watching_near_ranthambore/>} />
            <Route path="/chambal-safari-ranthambore" exact  element={<Chambal_Safari_Ranthambore/>} />
            <Route path="/contact-us" exact  element={<Contact/>} />
        </Routes>
        {/* <ScrollToTop className="scrollUp" smooth top="1500" component={<FaLevelUpAlt />} /> */}
    </Router>
  );
}

export default App;
