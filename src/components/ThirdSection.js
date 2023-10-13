import React from 'react';
// import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import Aboutusimg from "../assets/images/about/about.png"
import background2 from '../assets/images/bg/adventure.png'
import Aboutbgimg from "../assets/images/bg/about-bg-1.jpg"
const ThirdSection = () => {
    const data={
background:"#1D231F",
    }
    return (
       

   
        // <img  src={Aboutusimg} alt='aboutus' />
   


    <div className="mycontainer" style={data}>
      <div class="image">
      <div className="single-blog-post-three mb-40">
         <div className="post-thumbnail">
   
    <img src={Aboutusimg} alt="quote icon" className='myimg'/>
</div>
      </div>
      </div>
      <div className="mytext">
                <div className="col-lg-6">
              
                            
                            <h2>Ranthambore National Park</h2>
                        </div>
                        <p className="mb-30" style={{color:'white'}}>Ranthambore National Park is about 13.5 kilometres from Sawai Madhopur, Rajasthan’s capital. This spot, at the confluence of the Aravali and Vindhya hill ranges, is one of the best places to see wild animals, as they are accustomed to being watched. The park is approximately 400 square kilometres in size, and when combined with the Sawai Man Singh Sanctuary area, it is approximately 500 square kilometres.   The structures in Ranthambore National Park harken back to a bygone era. Throughout the park, there are numerous water bodies that provide perfect relief to the wild animals during the scorching hot summer days. A massive fort, after which the park is named, stands atop a hill overlooking the park. Many ruins from bygone eras can be found scattered throughout the jungle, giving it a unique, wonderful, and mixed flavour of nature, history, and wildlife. Tigers have been known to hunt in front of human visitors at Ranthambore National Park.</p>
                       

          
      </div>
    </div>


    )
}

export default ThirdSection;