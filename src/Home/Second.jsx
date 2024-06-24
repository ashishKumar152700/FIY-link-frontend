import React from 'react'
import img1 from "../../public/Home-1.png";
import "./Second.css";
import img2 from "../../public/second.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Second() {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
<>
<div
        className="second-home"
        
       
      >

        <div
          className="second-home-grid-1" 
          data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
        >
          <h2 className="home-heading2">
           <b> Boost your Profile </b>  <br />
            <span className="nextlevel-span">  Next level </span>
          </h2>
          <h5 className="home-h2heading">
            Tired of juggling multiple social media links? Say goodbye to that
            confusion! With FIY-LINK, you can transform your online presence
            into a seamless experience. Unlock the power of simplicity by
            sharing just one link that leads to all your social media platforms.
          </h5>
          <br /> <br />
          {/* <hr style={{background:'black', height:"4px",color:'black',borderColor:'black'}} />  */}
        </div>
        <div
          className="second-home-grid-2" 
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          
        ><div className="third-background"></div>

          <img src={img1} className="img1-home" style={{zIndex:'2'}} />
        </div>
      </div>
</>
    )
}

export default Second