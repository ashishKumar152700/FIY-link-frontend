import React from 'react'
import img2 from "../../public/home-2.png";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { AiOutlineCrown, AiOutlineArrowRight } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
import "./Third.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";  




function Third() {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
   <>
 <div
        className="third-home"
      >
        <div
          className="third-grid-1"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
         
        >
              <div className="image-overlay"></div>

          <img src={img2} alt=""   />
        </div>

        <div
          className="third-grid-2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style={{ padding: "40px 40px" }}
         
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "820",
              marginBottom: "3rem",
              color:'white'
            }}
          >
            {" "}
            Why choose FIY{" "}
          </h2>
          <small
            style={{ color: "white", fontSize: "14px", fontWeight: "500" }}
          >
            FIY is a platform or a tool that enables you to share more than one
            website or any link in the Insta bio.
          </small>
          <br />
          <br />
          <ul>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <small style={{ display: "flex" }}>
                <LiaPiggyBankSolid
                  style={{ fontSize: "4rem", color: "white" }}
                />
              </small>
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "capitalize",
                    marginBottom: "0.5rem",
                  }}
                >
                  Affordable Price
                </h5>
                <p style={{ fontSize: "15px", color: "whitesmoke" }}>
                  Effortless Setup, Maximum Gain: Embrace the power of instant
                  transformation. 
                </p>
              </div>
            </li>
          </ul>{" "}
          <br /> <br />
          <ul>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <small style={{ display: "flex" }}>
                <AiOutlineCrown style={{ fontSize: "4rem", color: "white" }} />
              </small>
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "capitalize",
                    marginBottom: "0.5rem",
                  }}
                >
                  Elevate Your Brand Identity
                </h5>
                <p style={{ fontSize: "15px", color: "whitesmoke" }}>
                  Your Personalized Digital Oasis: With FIY-LINK, you're not
                  just another profile –.
                </p>
              </div>
            </li>
          </ul>{" "}
          <br /> <br />
          <ul>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <small style={{ display: "flex" }}>
                <TbMessageCircle style={{ fontSize: "4rem", color: "white" }} />
              </small>
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "capitalize",
                    marginBottom: "0.5rem",
                  }}
                >
                  Dedicated Support 24/7
                </h5>
                <p style={{ fontSize: "15px", color: "whitesmoke" }}>
                  Support You Can Count On: Partner with professionals who care.
                  At FIY-LINK, 
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>


   
   </>
    )
}

export default Third