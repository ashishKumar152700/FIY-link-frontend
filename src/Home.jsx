// import React from 'react'
import "./Home.css";
import Navbar from "./Navbar";
import img1 from "../public/Home-1.png";
import img2 from "../public/home-2.png";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { AiOutlineCrown, AiOutlineArrowRight } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
FaLink;
// import img3 from "../public/home-4.png";
import { FaLink } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

import CarouselRatio from "./Icons";
import ButtonAppBar from "./HomeNavbar";
import { useNavigate } from "react-router-dom";
import pricing from "../public/1.png";
import img3 from "../public/comming_man_shape.png";
import Caresoulslider from "./caresoul";
import ResponsiveAppBar from "./HomeNavbar";
import Pricing2 from "./Pricing2";
import { useEffect } from "react";
import img4 from "../public/shap_style_6.png";
import Third from "./Home/Third";
import Second from "./Home/Second";
import First from "./Home/First";

TbMessageCircle;

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  const proceed = () => {
    navigate("/login");
  };
  return (
    <>
      {/* <ResponsiveAppBar /> */}

      {/* <First/> */}

 

  <div style={{marginBottom:'5%'}} data-aos="zoom-out">

<h1 style={{display:'flex',justifyContent:'center',marginTop:'5%',marginBottom:'5%',fontWeight:'820',fontSize:'3.5rem',paddingLeft:'10%'}}>Discover our top services</h1>
<div style={{display:'flex',justifyContent:'center',gapalignItems:'center',height:'100%',width:'100%',margin:'0',padding:'0',overflowX:'hidden'}}>        <Caresoulslider/> </div>

</div>
  
     

   

      <div className="home-4">
        <div
          className="home-4-grid-1"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p style={{ marginBottom: "5%", marginTop: "10%" }}>
            <FaLink
              style={{
                fontSize: "15rem",
                paddingLeft: "10%",
                color: "ActiveBorder",
              }}
            />
          </p>
          <h1
            style={{
              color: "#d2e823",
              lineHeight: "1.4",
              fontSize: "23px",
              fontFamily: "sans-serif",
              marginBottom: "20%",
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            I don’t know what else to say, this is something that you haven’t
            seen before. Unique design, lightweight, and outstanding support.
            Itekseo always a pleasure to work!
          </h1>
        </div>

        

        <div
          className="home-4-grid-2"
          style={{ marginBottom: "4%", marginTop: "4%" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={img3} alt="" />
        </div>
      </div>

      <div>
        <footer
          style={{
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1" }}>
              &copy; {new Date().getFullYear()} fiylink.com. All rights
              reserved.
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="/privacy-policy"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginRight: "20px",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div style={{ marginTop: "10px", fontSize: "14px" }}>
            Contact us:{" "}
            <a
              href="mailto:example@email.com"
              style={{ color: "#E9C0E9", textDecoration: "none" }}
            >
              FIYLINK@email.com
            </a>
            <span style={{ color: "#E9C0E9", marginLeft: "10px" }}>
              <i className="fa fa-phone" aria-hidden="true"></i> (123) 456-7890
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
